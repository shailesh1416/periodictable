const elements = [
    {
        atomicNumber: 1,
        name: "Hydrogen",
        symbol: "H",
        weight: 1.008

    },
    {
        atomicNumber: 2,
        name: "Helium",
        symbol: "He",
        weight: 4.003
    },
    {
        atomicNumber: 3,
        name: "Lithium",
        symbol: "Li",
        weight: 6.941
    },
    {
        atomicNumber: 4,
        name: "Beryllium",
        symbol: "Be",
        weight: 9.012
    },
    {
        atomicNumber: 5,
        name: "Boron",
        symbol: "B",
        weight: 10.811
    },
    {
        atomicNumber: 6,
        name: "Carbon",
        symbol: "C",
        weight: 12.011
    },
    {
        atomicNumber: 7,
        name: "Nitrogen",
        symbol: "N",
        weight: 14.007
    },
    {
        atomicNumber: 8,
        name: "Oxygen",
        symbol: "O",
        weight: 15.999
    },
    {
        atomicNumber: 9,
        name: "Fluorine",
        symbol: "F",
        weight: 18.998
    },
    {
        atomicNumber: 10,
        name: "Neon",
        symbol: "Ne",
        weight: 20.180
    },
    {
        atomicNumber: 11,
        name: "Sodium",
        symbol: "Na",
        weight: 14.007
    },
    {
        atomicNumber: 12,
        name: "Magnesium",
        symbol: "Mg",
        weight: 15.999
    },
    {
        atomicNumber: 13,
        name: "Aluminium",
        symbol: "Al",
        weight: 15.999
    },
    {
        atomicNumber: 14,
        name: "Silicon",
        symbol: "Si",
        weight: 15.999
    },
    {
        atomicNumber: 15,
        name: "Phosphorus",
        symbol: "P",
        weight: 15.999
    },
    {
        atomicNumber: 16,
        name: "Sulphur",
        symbol: "S",
        weight: 15.999
    },
    {
        atomicNumber: 17,
        name: "Chlorine",
        symbol: "Cl",
        weight: 15.999
    },
    {
        atomicNumber: 18,
        name: "Argon",
        symbol: "Ar",
        weight: 15.999
    },
    {
        atomicNumber: 19,
        name: "Potassium",
        symbol: "K",
        weight: 15.999
    },
    {
        atomicNumber: 20,
        name: "Calcium",
        symbol: "Ca",
        weight: 15.999
    },
    {
        atomicNumber: 21,
        name: "Scandium",
        symbol: "Sc",
        weight: 15.999
    },
    {
        atomicNumber: 22,
        name: "Titanium",
        symbol: "Ti",
        weight: 15.999
    },
    {
        atomicNumber: 23,
        name: "Vanadium",
        symbol: "V",
        weight: 15.999
    },
    {
        atomicNumber: 24,
        name: "Chromium",
        symbol: "Cc",
        weight: 15.999
    },
    {
        atomicNumber: 25,
        name: "Mangenese",
        symbol: "Mn",
        weight: 15.999
    },
    {
        atomicNumber: 26,
        name: "Iron",
        symbol: "Fe",
        weight: 15.999
    },
    {
        atomicNumber: 27,
        name: "Cobalt",
        symbol: "Co",
        weight: 15.999
    },
    {
        atomicNumber: 28,
        name: "Nickel",
        symbol: "Ni",
        weight: 15.999
    },
    {
        atomicNumber: 29,
        name: "Copper",
        symbol: "Cu",
        weight: 15.999
    },
    {
        atomicNumber: 30,
        name: "Zinc",
        symbol: "Zn",
        weight: 15.999
    },
    {
        atomicNumber: 31,
        name: "Galium",
        symbol: "Ga",
        weight: 15.999
    },
    {
        atomicNumber: 32,
        name: "Germanium",
        symbol: "Ge",
        weight: 15.999
    },
    {
        atomicNumber: 33,
        name: "Arsenic",
        symbol: "As",
        weight: 15.999
    },
    {
        atomicNumber: 34,
        name: "Selenium",
        symbol: "Se",
        weight: 15.999
    },
    {
        atomicNumber: 35,
        name: "Bromine",
        symbol: "Br",
        weight: 15.999
    },
    {
        atomicNumber: 36,
        name: "Kryptone",
        symbol: "Kr",
        weight: 15.999
    },
    {
        atomicNumber: 37,
        name: "Rubidium",
        symbol: "Rb",
        weight: 15.999
    },
    {
        atomicNumber: 38,
        name: "Strontium",
        symbol: "Sr",
        weight: 15.999
    },
    {
        atomicNumber: 39,
        name: "Yttrium",
        symbol: "Y",
        weight: 15.999
    },
    {
        atomicNumber: 40,
        name: "Zirconium",
        symbol: "Zr",
        weight: 15.999
    },
    {
        atomicNumber: 41,
        name: "Niobium",
        symbol: "Nb",
        weight: 15.999
    },
    {
        atomicNumber: 42,
        name: "Molybdenum",
        symbol: "Mo",
        weight: 15.999
    },
    {
        atomicNumber: 43,
        name: "Technetium",
        symbol: "Tc",
        weight: 15.999
    },
    {
        atomicNumber: 44,
        name: "Ruthenium",
        symbol: "Ru",
        weight: 15.999
    },
    {
        atomicNumber: 45,
        name: "Rhodium",
        symbol: "Rh",
        weight: 15.999
    },
    {
        atomicNumber: 46,
        name: "Paladium",
        symbol: "Pd",
        weight: 15.999
    },
    {
        atomicNumber: 47,
        name: "Silver",
        symbol: "Ag",
        weight: 15.999
    }, 
    {
        atomicNumber: 48,
        name: "Cadmium",
        symbol: "Cu",
        weight: 15.999
    },
    {
        atomicNumber: 49,
        name: "Indium",
        symbol: "In",
        weight: 15.999
    },
    {
        atomicNumber: 50,
        name: "Tin",
        symbol: "Sn",
        weight: 15.999
    },
    {
        atomicNumber: 51,
        name: "Antimony",
        symbol: "Sb",
        weight: 15.999
    },
    {
        atomicNumber: 52,
        name: "Tellurium",
        symbol: "Te",
        weight: 15.999
    },  
    {
        atomicNumber: 53,
        name: "Iodine",
        symbol: "I",
        weight: 15.999
    },
    {
        atomicNumber: 54,
        name: "Xenon",
        symbol: "Xe",
        weight: 15.999
    },
    {
        atomicNumber: 55,
        name: "Cesium",
        symbol: "Cs",
        weight: 15.999
    },
    {
        atomicNumber: 56,
        name: "Barium",
        symbol: "Ba",
        weight: 15.999
    },
    {
        atomicNumber: "",
        name: "*",
        symbol: "*",
        weight: 15.999
    },
    {
        atomicNumber: 72,
        name: "Hafnium",
        symbol: "Hf",
        weight: 15.999
    },
    {
        atomicNumber: 73,
        name: "Tantaium",
        symbol: "Ta",
        weight: 15.999
    },
    {
        atomicNumber: 74,
        name: "Tungsten",
        symbol: "W",
        weight: 15.999
    },
    {
        atomicNumber: 75,
        name: "Rhenium",
        symbol: "Re",
        weight: 15.999
    },
    {
        atomicNumber: 76,
        name: "Osmium",
        symbol: "Os",
        weight: 15.999
    },
    {
        atomicNumber: 77,
        name: "Iridium",
        symbol: "Ir",
        weight: 15.999
    },
    {
        atomicNumber: 78,
        name: "Platinum",
        symbol: "Pt",
        weight: 15.999
    },
    {
        atomicNumber: 79,
        name: "Gold",
        symbol: "Au",
        weight: 15.999
    },
    {
        atomicNumber: 80,
        name: "Marcury",
        symbol: "Hg",
        weight: 15.999
    },
    {
        atomicNumber: 81,
        name: "Thallium",
        symbol: "TI",
        weight: 15.999
    },
    {
        atomicNumber: 82,
        name: "Lead",
        symbol: "Pb",
        weight: 15.999
    },
    {
        atomicNumber: 83,
        name: "Bismuth",
        symbol: "Bi",
        weight: 15.999
    },
    {
        atomicNumber: 84,
        name: "Polonium",
        symbol: "Po",
        weight: 15.999
    },
    {
        atomicNumber: 85,
        name: "Asatioe",
        symbol: "At",
        weight: 15.999
    },
    {
        atomicNumber: 86,
        name: "Radon",
        symbol: "Rn",
        weight: 15.999
    },
    {
        atomicNumber: 87,
        name: "Francium",
        symbol: "Fr",
        weight: 15.999
    },
    {
        atomicNumber: 88,
        name: "Radium",
        symbol: "Ra",
        weight: 15.999
    },
    {
        atomicNumber: "",
        name: "#",
        symbol: "#",
        weight: 15.999
    },
    {
        atomicNumber: 104,
        name: "Rutherfordium",
        symbol: "Rf",
        weight: 15.999
    },
    {
        atomicNumber: 105,
        name: "Dubnium",
        symbol: "Db",
        weight: 15.999
    },
    {
        atomicNumber: 106,
        name: "Seaborgium",
        symbol: "Sg",
        weight: 15.999
    },
    {
        atomicNumber: 107,
        name: "Bohrium",
        symbol: "Bh",
        weight: 15.999
    },
    {
        atomicNumber: 108,
        name: "Hassium",
        symbol: "Hs",
        weight: 15.999
    },
    {
        atomicNumber: 109,
        name: "Meitoorium",
        symbol: "Mt",
        weight: 15.999
    },
    {
        atomicNumber: 110,
        name: "Darmstadtium",
        symbol: "Ds",
        weight: 15.999
    },
    {
        atomicNumber: 111,
        name: "Reonigenium",
        symbol: "Rg",
        weight: 15.999
    },
    {
        atomicNumber: 112,
        name: "Copernicium",
        symbol: "Cn",
        weight: 15.999
    },
    {
        atomicNumber: 113,
        name: "Nihomium",
        symbol: "Nh",
        weight: 15.999
    },
    {
        atomicNumber: 114,
        name: "Flerovium",
        symbol: "FL",
        weight: 15.999
    },
    {
        atomicNumber: 115,
        name: "Mosoovium",
        symbol: "Mc",
        weight: 15.999
    },
    {
        atomicNumber: 116,
        name: "Livermorium",
        symbol: "Lv",
        weight: 15.999
    },
    {
        atomicNumber: 117,
        name: "Tennessine",
        symbol: "Ts",
        weight: 15.999
    },
    {
        atomicNumber: 118,
        name: "Oganesson",
        symbol: "Ds",
        weight: 15.999
    },
    {
        atomicNumber: 57,
        name: "Lanthanum",
        symbol: "La",
        weight: 15.999
    },
    {
        atomicNumber: 58,
        name: "Cerium",
        symbol: "Ce",
        weight: 15.999
    },
    {
        atomicNumber: 59,   
        name: "Praseodymium",
        symbol: "Pr",
        weight: 15.999
    },
    {
        atomicNumber: 60,
        name: "Neodymium",
        symbol: "Nd",
        weight: 15.999
    },
    {
        atomicNumber: 61,
        name: "Promethium",
        symbol: "Pm",
        weight: 15.999
    },
    {
        atomicNumber: 62,
        name: "Samarium",
        symbol: "Sm",
        weight: 15.999
    },
    {
        atomicNumber: 63,
        name: "Europium",
        symbol: "Ds",
        weight: 15.999
    },
    {
        atomicNumber: 64,
        name: "Gadolinium",
        symbol: "Gd",
        weight: 15.999
    },
    {
        atomicNumber: 65,
        name: "Terbium",
        symbol: "Tb",
        weight: 15.999
    },
    {
        atomicNumber: 66,
        name: "Dysprosium",
        symbol: "Dy",
        weight: 15.999
    },
    {
        atomicNumber: 67,
        name: "Holmium",
        symbol: "Ho",
        weight: 15.999
    },
    {
        atomicNumber: 68,
        name: "Erbium",
        symbol: "Er",
        weight: 15.999
    },
    {
        atomicNumber: 69,
        name: "Thulium",
        symbol: "Tm",
        weight: 15.999
    },
    {
        atomicNumber: 70,
        name: "Ytterbium",
        symbol: "Yb",
        weight: 15.999
    },
    {
        atomicNumber: 71,
        name: "Lutetium",
        symbol: "Lu",
        weight: 15.999
    },
    {
        atomicNumber: 89,
        name: "Actinium",
        symbol: "Ac",
        weight: 15.999
    },
    {
        atomicNumber: 90,
        name: "Thorium",
        symbol: "Th",
        weight: 15.999
    },
    {
        atomicNumber: 91,
        name: "Protectinium",
        symbol: "Pa",
        weight: 15.999
    },
    {
        atomicNumber: 92,
        name: "Uranium",
        symbol: "U",
        weight: 15.999
    },
    {
        atomicNumber: 93,
        name: "Neptunium",
        symbol: "Np",
        weight: 15.999
    },
    {
        atomicNumber: 94,
        name: "Plutonium",
        symbol: "Pu",
        weight: 15.999
    },
    {
        atomicNumber: 95,
        name: "Americium",
        symbol: "Am",
        weight: 15.999
    },
    {
        atomicNumber: 96,
        name: "Curium",
        symbol: "Cm",
        weight: 15.999
    },
    {
        atomicNumber: 97,
        name: "Berkelium",
        symbol: "Ds",
        weight: 15.999
    },
    {
        atomicNumber: 98,
        name: "Californium",
        symbol: "Cf",
        weight: 15.999
    },
    {
        atomicNumber: 99,
        name: "Ensteinium",
        symbol: "Es",
        weight: 15.999
    },
    {
        atomicNumber: 100,
        name: "Fermium",
        symbol: "Fm",
        weight: 15.999
    },
    {
        atomicNumber: 101,
        name: "Mendelevium",
        symbol: "Md",
        weight: 15.999
    },
    {
        atomicNumber: 102,
        name: "Nobelium",
        symbol: "No",
        weight: 15.999
    },
    {
        atomicNumber: 103,
        name: "Lawrencium",
        symbol: "Lr",
        weight: 15.999
    },
   

]

function add(x,y){
    x.addEventListener('click',()=>{
        changeColor(y);
    })
}
function changeColor(c){
        // if (!disbled){
            for (i = 0; i <= elements.length-1; i++) {
                if (elementbox[i].classList.contains('disabled')){
                    elementbox[i].classList.remove('disabled')
                }else{
                    elementbox[i].classList.remove('highlite')
                }
            }
            for (i = 0; i <= elements.length-1; i++) {
                if (! elementbox[i].classList.contains(c)){
                    elementbox[i].classList.add('disabled')
                    
                }else{
                    elementbox[i].classList.add('highlite')
                }
            }
    }

const b1 = document.getElementById('alkali-metal')
const b2 = document.getElementById('alkali-earth-metal')
const b3 = document.getElementById('noble-gas')
const b4 = document.getElementById('reactive-nonmetal')
const b5 = document.getElementById('metalloid')
const b6 = document.getElementById('transition-metals')
const b7 = document.getElementById('post-transition')
const b8 = document.getElementById('lanthanide')
const b9 = document.getElementById('actinide')
const b10 = document.getElementById('unknown')



const elementbox = document.getElementsByClassName("atom")

for (i = 0; i <= elements.length-1; i++) {
    elementbox[i].innerHTML = "<span class='atomic-number'>"+elements[i].atomicNumber+"</span>"+elements[i].symbol+"<span class='atomic-name'>"+elements[i].name+"</span>";
}


add(b1,'alkali-metal')
add(b2,'alkali-earth-metal')
add(b3,'noble-gas')
add(b4,'reactive-nonmetal')
add(b5,'metalloid')
add(b6,'transition-metals')
add(b7,'post-transition')
add(b8,'lanthanide')
add(b9,'actinide')
add(b10,'unknown')






