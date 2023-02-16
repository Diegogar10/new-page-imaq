import image1 from '../assets/pics/HornosBelmonte.jpeg'
import image2 from '../assets/pics/HornosQbico.jpg'
import image3 from '../assets/pics/frontalHorno.jpeg'
import image4 from '../assets/pics/flautasHorno.jpeg'

export interface photos {
  id: number;
  title: string;
  description: string;
  url: string
}

export const galeryHome: photos[] = [{
  id: 1,
  title:'Fabricamos los Mejores Equipos',
  description: 'Industra nacional con mas de 11 años de experiencia en la fabricación de equipos para la indutria de alimentos.',
  url: image1
},
{
  id: 2,
  title:'Hornos de Cocción',
  description: 'Hornos indutriales para jamones, chorizos, pavos u otros productos carnicos de uno, dos o cuatro carros sencillos o tipo tunel.',
  url: image2
},
{
  id: 3,
  title:'Termoformadoras',
  description: 'Disponibles para empacar todo tipo de productos como quesos, chorizos, salchichas, jamones, carnes marinadas entre otros. La alta eficiencia en el empaque.',
  url: image3
},
{
  id: 4,
  title:'Mezcladores',
  description: 'Ideales para mezclas de pastas para hamburguesas, tocinetas, jamones, pavos entre otros. Equipos de grandes capacidades con posibilidad de vácio.',
  url: image4
},
{
  id: 5,
  title:'Tumblers',
  description: 'Tumbler la mejor opcion de la ciencia de marinado para una mezcla o producto, alcance grandes beneficios reducioendo la merma de su producto.',
  url: image4
},
{
  id: 6,
  title:'Tajadoras',
  description: 'Grandes velocidades de tajado, con la posibilidad de poder controlar la cantidad de tajadas del producto que desee.',
  url: image4
},
];