/* Crear un array de objetos
humanos [
    {
        name: 'Pedro', edad: 12,peso: 77,altura: 1.78
    }
    {
        name: 'Ana',edad: 17,peso: 60,altura: 1.68
    }
    {
        name: 'Luis',edad: 19,peso: 80,altura: 1.80
    }
];

hacer una tabla virtual con los headers(key) del objeto y en los rows poner el valor
    | NAME      | EDAD      | PESO     |  ALTURA      |  
    | Pedro      | 12      | 77     |  1.78      |
    | Ana     | edad      | peso     |  altura      |
    | Luis      | edad      | peso     |  altura      |

matar todos los eventos.
*/

(() => {
    let arrayHumans = [
        {
            name: 'Pedro',
            age: 23,
            weight: 77,
            height: 178
        },
        {
            name: 'Ana',
            age: 33,
            weight: 57,
            height: 180
        },
        {
            name: 'Luis',
            age: 28,
            weight: 80,
            height: 190
        },
        {
            name: 'Liz',
            age: 22,
            weight: 80,
            height: 190
        }
    ];

    // Creacion de etiquetas
    let container: HTMLElement = createElemtTN('div');
    let table: HTMLElement = createElemtTN('table');
    let tHead: HTMLElement = createElemtTN('thead');
    let tBody: HTMLElement = createElemtTN('tbody');
    let trHead: HTMLElement = createElemtTN('tr');
    let caption: HTMLElement = createElemtTN('caption');
    let inputSearch: HTMLElement = createElemtTN('input');


    // Edicion de etiquetas
    container = editElemt(container, 'id', 'container');
    table = editElemt(table, 'border', '2px');
    table = editElemt(table, 'style', 'background-color: rgb(50, 49, 49); width: 500px; margin: 10px; color: white');
    tBody = editElemt(tBody, 'style', 'background-color: rgb(106, 106, 106); text-align: center;')
    caption = editElemt(caption, 'style', 'width: 500px; border: 2px solid black; display: flex; justify-content: center; align-items: center; margin: 10px; background-color: steelblue; color: white; border-radius: 30px');
    inputSearch
        = editElemt(inputSearch
            , 'style', 'width: 500px; border-radius: 20px; margin: 10px; color: black');
    inputSearch
        = editElemt(inputSearch
            , 'placeholder', 'Buscador');
    inputSearch
        = editElemt(inputSearch
            , 'type', 'text');

    // Obtencion de las keys y agregarlas al thead
    let temp = arrayHumans[0];
    for (const key in temp) {
        let th: HTMLElement = createElemtTN('th');
        th.innerText = `${key.toUpperCase()}`;
        trHead.append(th)
        tHead.append(trHead)
    }

    // Creacion de las filas con la informacion de los objetos del array
    for (const person of arrayHumans) {
        //  Creacion de elementos para cada fila
        let trBody: HTMLElement = createElemtTN('tr');
        let tdBodyName: HTMLElement = createElemtTN('td');
        let tdBodyAge: HTMLElement = createElemtTN('td');
        let tdBodyWeight: HTMLElement = createElemtTN('td');
        let tdBodyHeight: HTMLElement = createElemtTN('td');

        // Asignacion de informacion a las filas de la tabla
        tdBodyName.innerText = `${person.name}`
        tdBodyAge.innerText = `${person.age}`
        tdBodyWeight.innerText = `${person.weight}`
        tdBodyHeight.innerText = `${person.height}`

        // Agregar los elementos al tr de body para cada fila
        trBody.append(tdBodyName, tdBodyAge, tdBodyWeight, tdBodyHeight);
        // Agregar cada tr que se cree al recorrer el for of y agregarlo al tbody
        tBody.append(trBody);
        // Buscador
            /* Buscador que muestre solo el registro indicado */
            inputSearch
                .addEventListener('change', (event: Event) => {
                    // console.log('event', event)
                    const filter: string = (event.target as HTMLInputElement).value;
                    inputSearch = editElemt(inputSearch, 'value', `${filter}`)
                    // console.log('filter', filter);
    
                    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
                    
                    for (const row of rows) {
                        // let trBody = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
                        const name = row.getElementsByTagName('td')[0].innerText;
                        // console.log('name', name)
                        if (name == filter){
                            trBody = row;
                            console.log('trBody', trBody);
                            
                        } else{
                            console.log('Nadie se llama asi');
                        }
                        /* table.append(tHead, tBody);
                        // Agregar caption, table al div container
                        caption.innerText = 'Table Humans with Name';
                        container.append(inputSearch, caption, table); */
                    }
    
                    /* if (person.name === filter) {
                        //  Creacion de elementos para cada fila
                        let trBodySearch: HTMLElement = createElemtTN('tr');
                        let tdBodyNameSearch: HTMLElement = createElemtTN('td');
                        let tdBodyAgeSearch: HTMLElement = createElemtTN('td');
                        let tdBodyWeightSearch: HTMLElement = createElemtTN('td');
                        let tdBodyHeightSearch: HTMLElement = createElemtTN('td');
                        // Asignacion de informacion a las filas de la tabla
                        tdBodyNameSearch.innerText = `${person.name}`;
                        tdBodyAgeSearch.innerText = `${person.age}`;
                        tdBodyWeightSearch.innerText = `${person.weight}`;
                        tdBodyHeightSearch.innerText = `${person.height}`;
    
                        // Agregar los elementos al tr de body para cada fila
                        trBodySearch.append(tdBodyNameSearch, tdBodyAgeSearch, tdBodyWeightSearch, tdBodyHeightSearch);
                        // Agregar cada tr que se cree al recorrer el for of y agregarlo al tbody
                        tBody.append(trBodySearch);
    
                    }
                    else {
                        console.log('Nadie se llama asi');
    
                        // Agregar thead a table
                        table.append(tHead);
                        // Agregar caption, table al div container
                        caption.innerText = 'Table Humans without name';
                        container.append(inputSearch
                        , caption, table);
                    } */
                });
    }

        // Agregar thead y tbody a table
        table.append(tHead, tBody);
        // Agregar caption, table al div container
        caption.innerText = 'Table Humans';
        container.append(inputSearch, caption, table);

    // Modo de vincular typescript con el documento html
    const body = document.getElementsByTagName('body')[0];
    // Agrega el div container al body para que se pueda mostrar en el DOM
    body.append(container);

})();

// Funcion para crear elementos
function createElemtTN(element: string): HTMLElement {
    return document.createElement(element);
}

// Funcion para editar etiquetas
function editElemt(element: HTMLElement, att: string, value: string) {
    element.setAttribute(att, value);
    return element;
}
