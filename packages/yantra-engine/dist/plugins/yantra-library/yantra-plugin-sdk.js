"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGOSYantraLibraryPlugin = void 0;
const yantra_registry_1 = require("./yantra-registry");
exports.SGOSYantraLibraryPlugin = {
    manifest: {
        id: 'org.sgos.plugin.yantra_library',
        name: 'SGOS Official Sacred Yantra Library Plugin',
        version: '1.0.0',
        author: 'SGOS Architecture Council',
        description: 'Official Sacred Geometry Library plugin providing canonical Yantras (Shri, Kuber, Ganesh, Mahalakshmi, Navagraha).'
    },
    register(container) {
        yantra_registry_1.YantraRegistry.listAllYantras().forEach(yantra => {
            container.registerGeometry(yantra.id, yantra.dsl);
        });
    }
};
