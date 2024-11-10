import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta de tu archivo JSON
const filePath = path.join(__dirname, 'data.json');

// Lista completa de IDs en orden
const ids = [
    "181dee8d-e3de-4d34-6fc5-7d2ad4991300", "86c68201-8641-47c7-6495-050edb451100",
    "1ff82f1b-ee9d-4241-cda3-57f7a9827900", "a913dc04-8186-48a0-9efd-d96b87c97300",
    "cca48402-cd23-4881-f0f4-be0c17368800", "29c3614c-c106-4e6c-2842-06726e850800",
    "9d7d9f7b-d245-40c5-bee0-9cdfa1ec1a00", "ed2fa8e0-f32d-4903-9bcf-e2be7afe7800",
    "cca48402-cd23-4881-f0f4-be0c17368800", "c208e0bb-e74f-459e-8b42-efe5c126e000",
    "a26ab707-6b8e-4eb0-ebb3-83db49344400", "575d9e39-439f-4953-bc7a-3d20e6a04300",
    "520dbce5-f4fe-4766-2dc7-f95c8dd1ec00", "02696762-75d5-4016-fb98-29c6707dad00",
    "f7363c69-6276-4e08-6ec4-d13ef544eb00", "c2160b53-d142-4ad9-aba8-f35fb93e1b00",
    "7dea0d17-4b66-4aea-c81b-c64b9e178a00", "1b2a945c-08f5-4310-ac23-6aeffbd4da00",
    "dab30848-e6f8-43af-5aef-a1d08f335900", "3822c305-c36e-43aa-1f32-4ba306a4ff00",
    "55395629-9d0f-495b-f4d1-8561534dbd00", "7f82496a-c893-46b8-ffe3-f7380de59400",
    "610ef03e-3218-4781-106d-5c3e0ae3d200", "2d50778f-204c-4dac-4627-3a3fbd6ebe00",
    "f2a3aee4-21b9-4985-df9a-7b7f9bce1e00", "9d5b0f7e-e428-4e14-a066-ca1f79c8c200",
    "be9f61e4-eb3a-4a2e-7ebf-a4a8f2420200", "7fa70814-a991-4047-a135-c8422b815800",
    "83fa0170-1cd1-4f45-59f6-829bd84f2200", "074b8a20-7b3b-479a-c39a-8cdeb5071000",
    "c650e8c3-0531-42db-759f-dc26e2015b00", "5d5cb82a-0ae6-4868-8c3d-742031d68400",
    "436513d7-462e-4eb5-c6ab-34d39aa05400", "5b70127f-a56a-457f-c0be-1e72b659b600",
    "12396d98-7c48-4587-fa37-48ecf1460600", "52c66031-caf5-4842-1729-8c6701cee500",
    "fe9c7a76-f141-433c-b101-5e3fb084bd00", "66a2c20d-4b32-4687-e7e5-0e9519499d00",
    "71b796cb-b8b0-4632-1c20-bbe7ffdf1300", "424a580d-e401-4355-8282-7dea3bc18100",
    "57d7eeda-d338-4dc6-c955-07e96d7a9200", "85680914-62bc-4ed8-9512-6fd8ef2a2500",
    "0c360963-6a7c-47b2-aea8-7f1cd9034b00", "924cdd86-83ec-4747-53fb-77a9e3cea500",
    "bc4f2710-5ef5-439b-dbb2-ebde5a4a7000", "3bd2a1f8-e163-42e2-ab52-e0056eca7400",
    "f9bbcfeb-4058-4680-4ab9-db5360edc900", "b052ec7c-d487-40dd-7c91-5bc36c435800",
    "a8026d69-1168-4c3c-f14b-a5805e8aee00", "0da74ffe-742a-4b9d-92c1-9e91a3996b00",
    "26932df0-4ab3-411d-285d-2a1aef67cc00", "b532a737-c3b5-4426-5cec-64bc35ea4b00",
    "faac318f-cc30-4285-68db-d7e820948b00", "9e27d4b2-e731-4d7c-3257-72705a92bd00",
    "6bdad038-d888-4687-fbfb-c8d5f5172800", "57511d14-b1b4-4378-52ed-a84bbd2b3a00",
    "256d9010-6f29-45c6-cc21-32f04ef88700", "c70fcaa3-4299-473b-82c5-896711012800",
    "d5c79b7f-c413-43b5-ee7d-9aee9cf75e00", "f17006f6-89e3-4e7f-12d1-99a8f2ab8200",
    "0a1e32d1-159d-4b88-196e-f9804db14f00", "73d15771-dacb-4b0e-a57d-d6ae79726b00",
    "1bef1734-5b58-4ac6-4ed2-d7870ebc0300", "ca7083f0-57cb-455b-e8ad-126a40e3ad00",
    "dbb51105-79ba-428d-359d-f20090b5d300", "b1ec5e4b-3026-4a8b-e86f-1a16f9a1a300",
    "e995bc84-5ba8-4851-a71a-071bc253ba00", "c650e8c3-0531-42db-759f-dc26e2015b00",
    "69f7078f-4604-43af-81c2-0f4ac5dc8500"
];

try {
    // Leer archivo JSON
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    let idIndex = 0;

    // Recorrer categorías, subcategorías y productos
    data.categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.products.forEach(product => {
                // Asignar ID si hay disponibles
                if (idIndex < ids.length) {
                    product.image = ids[idIndex];
                    idIndex++;
                }
            });
        });
    });

    // Guardar cambios en el archivo JSON
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Archivo JSON actualizado con los IDs en cada producto.');
} catch (error) {
    console.error('Error al procesar el archivo JSON:', error);
}
