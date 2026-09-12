import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const file = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "store.json");
const store = JSON.parse(readFileSync(file, "utf8"));

/** @type {Array<[string, string, string, number, string, boolean?]>} */
const items = [
  ["prod-dom-tabla-mar-tierra", "Mar y Tierra", "Tabla mar y tierra. Domingos en Cedrus.", 34900, "cat-tablas", true],
  ["prod-dom-tabla-pollo-carne-chica", "Pollo carne chica", "Tabla pollo carne chica. Domingos en Cedrus.", 23400, "cat-tablas"],
  ["prod-dom-tabla-pollo-carne-grande", "Pollo carne grande", "Tabla pollo carne grande. Domingos en Cedrus.", 29900, "cat-tablas"],
  ["prod-dom-tabla-cedrus", "Tabla Cedrus", "Tabla Cedrus. Domingos en Cedrus.", 22900, "cat-tablas", true],
  ["prod-dom-tabla-cedrus-camarones", "Tabla Cedrus con camarones", "Tabla Cedrus con camarones. Domingos en Cedrus.", 26900, "cat-tablas"],

  ["prod-dom-papas-carne-pollo-grande", "Papas fritas carne pollo grande", "Papas fritas grande con carne y pollo. Domingos en Cedrus.", 15500, "cat-papas"],
  ["prod-dom-papas-pollo-vienesa-grande", "Papas fritas pollo vienesa grande", "Papas fritas grande con pollo y vienesa. Domingos en Cedrus.", 13900, "cat-papas"],
  ["prod-dom-salchipapas-grande", "Salchipapas grande", "Salchipapas grande. Domingos en Cedrus.", 9900, "cat-papas"],
  ["prod-dom-salchipapas-chica", "Salchipapas chica", "Salchipapas chica. Domingos en Cedrus.", 6900, "cat-papas"],

  ["prod-dom-fajitas-camaron", "Fajitas de camarón", "Fajitas de camarón. Domingos en Cedrus.", 10900, "cat-fajitas"],
  ["prod-dom-fajitas-mixta", "Fajitas mixta", "Fajitas mixta. Domingos en Cedrus.", 9900, "cat-fajitas"],
  ["prod-dom-fajitas-vegetariana", "Fajitas vegetariana", "Fajitas vegetariana. Domingos en Cedrus.", 7900, "cat-fajitas"],
  ["prod-dom-fajitas-pollo", "Fajitas de pollo", "Fajitas de pollo. Domingos en Cedrus.", 8900, "cat-fajitas"],

  ["prod-dom-pizza-4-carnes", "Pizza 4 carnes", "Pizza 4 carnes. Domingos en Cedrus.", 26900, "cat-pizzas"],
  ["prod-dom-pizza-cedrus", "Pizza Cedrus", "Pizza Cedrus. Domingos en Cedrus.", 23900, "cat-pizzas", true],
  ["prod-dom-pizza-camaron", "Pizza camarón", "Pizza camarón. Domingos en Cedrus.", 25900, "cat-pizzas"],

  ["prod-dom-tomahawk-pobre", "Tomahawk a lo pobre", "Tomahawk a lo pobre. Domingos en Cedrus.", 25900, "cat-platos", true],
  ["prod-dom-entrana-pobre", "Entraña a lo pobre", "Entraña a lo pobre. Domingos en Cedrus.", 23700, "cat-platos"],
  ["prod-dom-filete-pobre", "Filete a lo pobre", "Filete a lo pobre. Domingos en Cedrus.", 21900, "cat-platos"],
  ["prod-dom-filete-arroz", "Filete con arroz o puré", "Filete con arroz o puré. Domingos en Cedrus.", 18900, "cat-platos"],
  ["prod-dom-vetado-pobre", "Lomo vetado a lo pobre", "Lomo vetado a lo pobre. Domingos en Cedrus.", 19900, "cat-platos"],
  ["prod-dom-lomo-pure", "Lomo con puré o arroz", "Lomo con puré o arroz. Domingos en Cedrus.", 17900, "cat-platos"],
  ["prod-dom-salmon-pobre", "Salmón a lo pobre", "Salmón a lo pobre. Domingos en Cedrus.", 14900, "cat-platos"],
  ["prod-dom-salmon-pure", "Salmón con puré o arroz", "Salmón con puré o arroz. Domingos en Cedrus.", 12900, "cat-platos"],
  ["prod-dom-bistec-pobre", "Bistec a lo pobre", "Bistec a lo pobre. Domingos en Cedrus.", 11900, "cat-platos"],
  ["prod-dom-bistec-guarnicion", "Bistec con puré, arroz o ensalada", "Bistec con puré, arroz o ensalada. Domingos en Cedrus.", 10900, "cat-platos"],
  ["prod-dom-ave-pobre", "Ave a lo pobre", "Ave a lo pobre. Domingos en Cedrus.", 9900, "cat-platos"],
  ["prod-dom-ave-guarnicion", "Ave con puré, arroz o ensalada", "Ave con puré, arroz o ensalada. Domingos en Cedrus.", 8900, "cat-platos"],

  ["prod-dom-nino-ave", "Menú niño ave con puré o arroz", "Menú de niño: ave con puré o arroz. Domingos en Cedrus.", 7000, "cat-nino"],
  ["prod-dom-nino-salmon", "Menú niño salmón con puré o arroz", "Menú de niño: salmón con puré o arroz. Domingos en Cedrus.", 7800, "cat-nino"],

  ["prod-dom-panqueques-helado", "Panqueques con helado", "Panqueques con helado. Domingos en Cedrus.", 6300, "cat-pasteleria"],
  ["prod-dom-postre-dia", "Postre del día", "Postre del día. Domingos en Cedrus.", 4000, "cat-pasteleria"],
  ["prod-dom-tortas", "Tortas", "Porción de torta. Domingos en Cedrus.", 5500, "cat-pasteleria"],

  ["prod-dom-bebidas", "Bebidas", "Bebida. Domingos en Cedrus.", 2390, "cat-bebidas-jugos"],
  ["prod-dom-jugo-natural", "Jugo natural", "Jugo natural. Domingos en Cedrus.", 5200, "cat-bebidas-jugos"],
  ["prod-dom-jugo-watts", "Jugo Watts", "Jugo Watts. Domingos en Cedrus.", 1900, "cat-bebidas-jugos"],
  ["prod-dom-limonada-tradicional", "Limonada tradicional", "Limonada tradicional. Domingos en Cedrus.", 3200, "cat-bebidas-jugos"],
  ["prod-dom-limonada-menta", "Limonada menta jengibre", "Limonada menta jengibre. Domingos en Cedrus.", 3600, "cat-bebidas-jugos"],
  ["prod-dom-limonada-sabores", "Limonada sabores", "Limonada de sabores. Domingos en Cedrus.", 4500, "cat-bebidas-jugos"],

  ["prod-dom-sour-tradicional", "Sour tradicional", "Sour tradicional. Domingos en Cedrus.", 4900, "cat-sour"],
  ["prod-dom-sour-maqui", "Sour maqui", "Sour maqui. Domingos en Cedrus.", 6400, "cat-sour"],
  ["prod-dom-sour-sabores", "Sour sabores", "Sour sabores. Domingos en Cedrus.", 6400, "cat-sour"],

  ["prod-dom-schop-torobayo-350", "Schop Torobayo 350 ml", "Schop Torobayo 350 ml. Domingos en Cedrus.", 5000, "cat-schop"],
  ["prod-dom-schop-torobayo-500", "Schop Torobayo 500 ml", "Schop Torobayo 500 ml. Domingos en Cedrus.", 5500, "cat-schop"],
  ["prod-dom-schop-austral-350", "Schop Austral Calafate 350 ml", "Schop Austral Calafate 350 ml. Domingos en Cedrus.", 5000, "cat-schop"],
  ["prod-dom-schop-austral-500", "Schop Austral Calafate 500 ml", "Schop Austral Calafate 500 ml. Domingos en Cedrus.", 5500, "cat-schop"],
  ["prod-dom-schop-heineken-350", "Schop Heineken 350 ml", "Schop Heineken 350 ml. Domingos en Cedrus.", 4300, "cat-schop"],
  ["prod-dom-schop-heineken-500", "Schop Heineken 500 ml", "Schop Heineken 500 ml. Domingos en Cedrus.", 4800, "cat-schop"],
  ["prod-dom-schop-royal-350", "Schop Royal 350 ml", "Schop Royal 350 ml. Domingos en Cedrus.", 4200, "cat-schop"],
  ["prod-dom-schop-royal-500", "Schop Royal 500 ml", "Schop Royal 500 ml. Domingos en Cedrus.", 4600, "cat-schop"],
  ["prod-dom-schop-cristal-350", "Schop Cristal 350 ml", "Schop Cristal 350 ml. Domingos en Cedrus.", 3600, "cat-schop"],
  ["prod-dom-schop-cristal-500", "Schop Cristal 500 ml", "Schop Cristal 500 ml. Domingos en Cedrus.", 4200, "cat-schop"],
];

store.products = store.products.filter((item) => !String(item.id).startsWith("prod-dom-"));

for (const [id, name, description, price, categoryId, featured] of items) {
  store.products.push({
    id,
    name,
    description,
    price,
    categoryId,
    imageUrl: "",
    available: true,
    featured: Boolean(featured),
    menus: ["weekend"],
  });
}

writeFileSync(file, JSON.stringify(store, null, 2), "utf8");
const sunday = store.products.filter((item) => item.menus.includes("weekend")).length;
console.log(`Sunday products: ${sunday}. Total products: ${store.products.length}`);
