"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSPhysicsAnalogyEngine = void 0;
class SGOSPhysicsAnalogyEngine {
    static analogies = new Map();
    static isInitialized = false;
    static initIfNeeded() {
        if (this.isInitialized)
            return;
        // 1. Shri Yantra (Sri Chakra) - 4 Shiva x 5 Shakti = 20 Principles
        this.analogies.set('sri_yantra', {
            yantraId: 'sri_yantra',
            title: 'Shri Chakra - Fundamental Physics & Quantum Forces Analogy',
            formula: '20 = 4 (Forces/Laws) × 5 (Matter/Reality)',
            shivaPrinciplesTitle: '4 Upward Triangles (Śiva)',
            shivaPrinciplesSubtitle: '4 Fundamental Forces / Governing Cosmic Laws',
            shivaPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'प्रबल नाभिकीय बल',
                    nameEnglish: 'Strong Nuclear Force',
                    physicsAnalogy: 'Quantum Chromodynamics (QCD)',
                    physicsDomain: 'Subatomic Particle Physics',
                    description: 'Binds quarks together inside protons and neutrons to form hadronic matter.'
                },
                {
                    index: 2,
                    nameSanskrit: 'विद्युतचुंबकीय बल',
                    nameEnglish: 'Electromagnetic Force',
                    physicsAnalogy: 'Quantum Electrodynamics (QED)',
                    physicsDomain: 'Photonics & Atomic Structure',
                    description: 'Governs atomic bonding, light propagation, chemical reactions, and electromagnetic radiation.'
                },
                {
                    index: 3,
                    nameSanskrit: 'दुर्बल नाभिकीय बल',
                    nameEnglish: 'Weak Nuclear Force',
                    physicsAnalogy: 'Electroweak Interaction (W/Z Bosons)',
                    physicsDomain: 'Nuclear Physics & Stellar Fusion',
                    description: 'Drives radioactive decay, flavor transmutation, and solar hydrogen fusion in stars.'
                },
                {
                    index: 4,
                    nameSanskrit: 'गुरुत्वाकर्षण बल',
                    nameEnglish: 'Gravitational Force',
                    physicsAnalogy: 'General Relativity / Quantum Gravity',
                    physicsDomain: 'Astrophysics & Spacetime Curvature',
                    description: 'Curves spacetime geometry, binding moons, planets, stars, and galaxies.'
                }
            ],
            shaktiPrinciplesTitle: '5 Downward Triangles (Śakti)',
            shaktiPrinciplesSubtitle: '5 Manifestations of Matter & Energy Spectrum',
            shaktiPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'क्वार्क कण',
                    nameEnglish: 'Quarks',
                    physicsAnalogy: 'Hadronic Matter Building Blocks',
                    physicsDomain: 'Standard Model - Matter',
                    description: 'Up/Down/Charm/Strange/Top/Bottom quarks that form nuclear mass.'
                },
                {
                    index: 2,
                    nameSanskrit: 'लेप्टॉन कण',
                    nameEnglish: 'Leptons',
                    physicsAnalogy: 'Fundamental Matter Particles',
                    physicsDomain: 'Standard Model - Particles',
                    description: 'Electrons, muons, taus, and neutrinos carrying electric charge and spin.'
                },
                {
                    index: 3,
                    nameSanskrit: 'गेज बोसॉन',
                    nameEnglish: 'Gauge Bosons',
                    physicsAnalogy: 'Force Carrier Particles',
                    physicsDomain: 'Quantum Field Theory',
                    description: 'Photons, gluons, and W/Z bosons transmitting physical interaction fields.'
                },
                {
                    index: 4,
                    nameSanskrit: 'हिग्स क्षेत्र',
                    nameEnglish: 'Higgs Field',
                    physicsAnalogy: 'Source of Mass (Bhabha Scattering)',
                    physicsDomain: 'Mass Generation Field',
                    description: 'Scalar field whose non-zero vacuum expectation value endows particles with inertia.'
                },
                {
                    index: 5,
                    nameSanskrit: 'डार्क सैक्टर',
                    nameEnglish: 'Dark Sector',
                    physicsAnalogy: 'Dark Matter & Dark Energy (95% Universe)',
                    physicsDomain: 'Cosmology & Astrobiology',
                    description: 'Invisible dark matter halo and cosmological constant driving cosmic acceleration.'
                }
            ],
            cosmologicalSynthesis: 'The union of 4 Fundamental Forces (Shiva) and 5 Matter-Energy Manifestations (Shakti) produces 20 fundamental interactions, resulting in the 43 circuit triangles of physical manifestation.',
            physicsDomains: ['Quantum Field Theory', 'General Relativity', 'Standard Model', 'Cosmology']
        });
        // 2. Maha Meru (3D Pyramidal Sri Yantra)
        this.analogies.set('maha_meru_3d', {
            yantraId: 'maha_meru_3d',
            title: 'Maha Meru - Multi-Dimensional Spacetime & Holography',
            formula: '3D Pyramid = 2D CFT Boundary → 3D AdS Bulk Holography',
            shivaPrinciplesTitle: '9 Spacetime Elevation Levels',
            shivaPrinciplesSubtitle: 'Spatial Curvature & Dimensional Projection',
            shivaPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'आकाश ज्यामिति',
                    nameEnglish: 'Spacetime Metric Tensor',
                    physicsAnalogy: 'Einstein Field Equations ($G_{\\mu\\nu}$)',
                    physicsDomain: 'General Relativity',
                    description: 'Curvature of 3D spatial slices projected from 2D holographic boundary.'
                }
            ],
            shaktiPrinciplesTitle: 'Holographic Principle Components',
            shaktiPrinciplesSubtitle: 'AdS/CFT Boundary Correspondence',
            shaktiPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'होलोग्राफिक सूचना',
                    nameEnglish: 'Holographic Entanglement Entropy',
                    physicsAnalogy: 'Ryu-Takayanagi Formula',
                    physicsDomain: 'Quantum Gravity & Holography',
                    description: 'Minimal surface area in 3D bulk encodes quantum information of 2D boundary.'
                }
            ],
            cosmologicalSynthesis: 'Maha Meru represents the 3D spatial bulk projected holographically from the 2D planar Shri Chakra boundary.',
            physicsDomains: ['Holographic Principle', 'AdS/CFT Correspondence', 'Quantum Information']
        });
        // 3. Kuber Yantra (Wealth 3x3 Magic Square)
        this.analogies.set('kuber_yantra', {
            yantraId: 'kuber_yantra',
            title: 'Kuber Yantra - Matrix Mechanics & Energy Symmetry Grids',
            formula: 'Magic Sum = 72 (9 Cells × Conservation Equilibrium)',
            shivaPrinciplesTitle: 'Symmetry Invariants',
            shivaPrinciplesSubtitle: 'Conservation Laws & Matrix Eigenvalues',
            shivaPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'अविनाशिता नियम',
                    nameEnglish: 'Noether\'s Theorem',
                    physicsAnalogy: 'Continuous Symmetry Conservation',
                    physicsDomain: 'Analytical Mechanics',
                    description: 'Every invariant symmetry transformation corresponds to a conserved physical quantity.'
                }
            ],
            shaktiPrinciplesTitle: '3x3 Matrix Tensors',
            shaktiPrinciplesSubtitle: 'Tensor Algebra & Stress-Energy Equilibrium',
            shaktiPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'मैट्रिक्स सन्तुलन',
                    nameEnglish: 'Stress-Energy Tensor ($T_{\\mu\\nu}$)',
                    physicsAnalogy: '3x3 Symmetric Energy-Momentum Matrix',
                    physicsDomain: 'Field Theory',
                    description: 'Equal diagonal and anti-diagonal sums maintain zero-divergence energy conservation.'
                }
            ],
            cosmologicalSynthesis: 'Kuber Yantra models the conservative equilibrium of energy flow through 3x3 matrix tensor mechanics.',
            physicsDomains: ['Matrix Mechanics', 'Tensor Analysis', 'Conservation Laws']
        });
        // 4. Ganesh Yantra (Swastika & 8-Petal Lotus)
        this.analogies.set('ganesh_yantra', {
            yantraId: 'ganesh_yantra',
            title: 'Ganesh Yantra - Swastika Angular Momentum & Toroidal Vortices',
            formula: 'Swastika Spin = Toroidal Vortex + Octonionic 8-Fold Symmetry',
            shivaPrinciplesTitle: 'Angular Momentum Vectors',
            shivaPrinciplesSubtitle: 'Rotational Invariance & Spin Matrices',
            shivaPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'कोणीय संवेग',
                    nameEnglish: 'Angular Momentum ($L = r \\times p$)',
                    physicsAnalogy: 'Pauli Spin Matrices & Gyroscopic Stability',
                    physicsDomain: 'Quantum Mechanics',
                    description: 'Right-handed orthogonal arms create rotational stability and obstacle dissipation.'
                }
            ],
            shaktiPrinciplesTitle: 'Toroidal Field Vortex',
            shaktiPrinciplesSubtitle: 'Magnetic Vector Potential ($A$)',
            shaktiPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'ऊर्जा भंवर',
                    nameEnglish: 'Toroidal Magnetic Field',
                    physicsAnalogy: 'Tokamak Plasma Vortex',
                    physicsDomain: 'Plasma Physics',
                    description: 'Closed toroidal magnetic flux surfaces insulating inner core energy.'
                }
            ],
            cosmologicalSynthesis: 'Ganesh Yantra models gyroscopic stability and magnetic toroidal vortex shielding against environmental turbulence.',
            physicsDomains: ['Fluid Dynamics', 'Plasma Physics', 'Toroidal Geometry']
        });
        // Default Fallback Generator for all other Yantras
        this.isInitialized = true;
    }
    static getAnalogy(yantraId) {
        this.initIfNeeded();
        if (this.analogies.has(yantraId)) {
            return this.analogies.get(yantraId);
        }
        // Default Physics Analogy Profile for Planetary / Deity Yantras
        return {
            yantraId,
            title: `${yantraId.replace('_yantra', '').replace('_', ' ').toUpperCase()} Yantra - Cosmic Physics & Harmonic Resonance`,
            formula: 'Resonance = Frequency (v) × Vector Geometry (Symmetry Group)',
            shivaPrinciplesTitle: 'Symmetry & Field Geometry (Śiva)',
            shivaPrinciplesSubtitle: 'Governing Field Laws & Coordinate Vectors',
            shivaPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'क्षेत्र ज्यामिति',
                    nameEnglish: 'Cosmic Field Geometry',
                    physicsAnalogy: 'Harmonic Oscillator Field',
                    physicsDomain: 'Field Mechanics',
                    description: 'Geometrical boundary conditions directing wave node propagation.'
                }
            ],
            shaktiPrinciplesTitle: 'Energetic Resonance (Śakti)',
            shaktiPrinciplesSubtitle: 'Wave Frequency & Photonic Energy Spectrum',
            shaktiPrinciples: [
                {
                    index: 1,
                    nameSanskrit: 'तरंग ऊर्जा',
                    nameEnglish: 'Radiative Wave Energy ($E = h\\nu$)',
                    physicsAnalogy: 'Electromagnetic Frequency Spectrum',
                    physicsDomain: 'Quantum Optics',
                    description: 'Harmonic frequency resonance aligning subtle mental and physical energy fields.'
                }
            ],
            cosmologicalSynthesis: 'Translates cosmic planetary wave mechanics and geometrical boundary conditions into focused harmonic resonance.',
            physicsDomains: ['Harmonic Motion', 'Electrodynamics', 'Resonance Field Theory']
        };
    }
}
exports.SGOSPhysicsAnalogyEngine = SGOSPhysicsAnalogyEngine;
