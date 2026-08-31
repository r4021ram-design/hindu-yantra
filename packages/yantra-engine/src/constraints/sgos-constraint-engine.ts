import {
  ISGOSConstraint,
  ValidatedIGR
} from './types';
import { IntermediateGeometryRepresentation } from '../compiler/types';
import { IncrementalValidator } from './incremental-validator';
import {
  ConcentricConstraint,
  SymmetryConstraint
} from './geometric-constraints';
import {
  BinduAtOriginConstraint,
  LotusConcentricityConstraint,
  BhupuraSquarenessConstraint,
  NavavaranaOrderingConstraint,
  RadialSymmetryConstraint,
  TraditionRulesConstraint
} from './sacred-constraints';

export class SGOSConstraintEngine {
  private constraints: ISGOSConstraint[] = [];
  private incrementalValidator: IncrementalValidator = new IncrementalValidator();

  constructor() {
    this.registerCanonicalDefaults();
  }

  /** Register canonical default sacred geometry constraints */
  private registerCanonicalDefaults(): void {
    this.registerConstraint(new BinduAtOriginConstraint());
    this.registerConstraint(new BhupuraSquarenessConstraint());
    this.registerConstraint(new ConcentricConstraint('c_default_concentric', ['p_bindu', 'circle_outer']));
    this.registerConstraint(new SymmetryConstraint('c_default_symmetry', ['lotus_rings'], { order: 8 }));
    this.registerConstraint(new LotusConcentricityConstraint(['lotus_16', 'lotus_8']));
    this.registerConstraint(new NavavaranaOrderingConstraint(['bindu', 'core_triangles', 'lotus_8', 'lotus_16', 'bhupura']));
    this.registerConstraint(new RadialSymmetryConstraint(['lotus_rings']));
    this.registerConstraint(new TraditionRulesConstraint(['core_triangles']));
  }

  /** Register a custom geometric or sacred constraint */
  public registerConstraint(constraint: ISGOSConstraint): void {
    this.constraints = this.constraints.filter(c => c.id !== constraint.id);
    this.constraints.push(constraint);
  }

  /** Unregister constraint by ID */
  public unregisterConstraint(constraintId: string): void {
    this.constraints = this.constraints.filter(c => c.id !== constraintId);
  }

  /** Get all registered constraints */
  public getRegisteredConstraints(): readonly ISGOSConstraint[] {
    return Object.freeze([...this.constraints]);
  }

  /**
   * Main Validation Pipeline: Validates IGR against all constraints.
   * Returns a ValidatedIGR containing the validated document and ConstraintReport.
   */
  public validate(igr: IntermediateGeometryRepresentation): ValidatedIGR {
    const report = this.incrementalValidator.validateFull(igr, this.constraints);

    return {
      igr,
      constraintReport: report,
      isValidated: report.isSatisfied,
      validatedTimestamp: new Date().toISOString()
    };
  }

  /**
   * Incremental Validation Pipeline: Only re-evaluates constraints targeting dirty nodes.
   */
  public validateIncremental(
    igr: IntermediateGeometryRepresentation,
    dirtyNodeIds: Iterable<string>
  ): ValidatedIGR {
    this.incrementalValidator.markNodesDirty(dirtyNodeIds);
    const report = this.incrementalValidator.validateIncremental(igr, this.constraints);

    return {
      igr,
      constraintReport: report,
      isValidated: report.isSatisfied,
      validatedTimestamp: new Date().toISOString()
    };
  }
}
