// Select color input
let color = document.getElementById('colorPicker')
let table = document.getElementById('pixelCanvas')
let sizePicker = document.getElementById('sizePicker')

let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
// makeGrid(height, width);

sizePicker.addEventListener('click', (e) => {
    e.preventDefault();
    makeGrid();
})

// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {
 
    // empty the table first if full
   if (table.innerHTML !== "") {
    table.innerHTML = "";
   }
 
    // creates the table
    for (let i = 0; i < height.value; i++) {
        let height_elem = document.createElement("tr");
        // console.log(height_elem)
        for (let j = 0; j < width.value; j++) {
            let width_elem = document.createElement("td");
            width_elem.addEventListener('click', function (e) { 
                if (e.target.bgColor.includes('#')) {
                    e.target.bgColor = ''
                } else {
                    e.target.bgColor = color.value
                }
            })
            height_elem.append(width_elem);
            table.append(height_elem);
        }
    }


}
