import { SGOSPlugin, SGOSPluginContainer } from '../../sdk/types';
import { YantraRegistry } from './yantra-registry';

export const SGOSYantraLibraryPlugin: SGOSPlugin = {
  manifest: {
    id: 'org.sgos.plugin.yantra_library',
    name: 'SGOS Official Sacred Yantra Library Plugin',
    version: '1.0.0',
    author: 'SGOS Architecture Council',
    description: 'Official Sacred Geometry Library plugin providing canonical Yantras (Shri, Kuber, Ganesh, Mahalakshmi, Navagraha).'
  },
  register(container: SGOSPluginContainer) {
    YantraRegistry.listAllYantras().forEach(yantra => {
      container.registerGeometry(yantra.id, yantra.dsl);
    });
  }
};
