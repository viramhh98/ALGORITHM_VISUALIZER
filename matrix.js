class matrix {
    constructor(rows, cols, id) {
        this.rows = rows;
        this.cols = cols;
        this.id = id;
        this.matrix = [];
        this.initialize_matrix();
        this.renderMatrix();

    }

    initialize_matrix() {
        for (var i = 0; i < this.rows; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < this.cols; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }


    // Function to render matrix in HTML table
    renderMatrix() {
        var tableBody = document.getElementById(this.id);
        var tableHtml = '';
        // Add column indices as header row
        tableHtml += '<tr><th></th>';
        for (var j = 0; j < this.cols; j++) {
            tableHtml += '<th class="index">' + j + '</th>';
        }
        tableHtml += '</tr>';
        // Add row indices and matrix data
        for (var i = 0; i < this.rows; i++) {
            tableHtml += '<tr>';
            tableHtml += '<th class="index">' + i + '</th>';
            for (var j = 0; j < this.cols; j++) {
                tableHtml += '<td><input type="text" id="' + this.id + '_' + i + '_' + j + '" value="' + this.matrix[i][j] + '" onchange="updateValue(' + i + ',' + j + ', this.value)"></td>';        }
            tableHtml += '</tr>';
        }
        tableBody.innerHTML = tableHtml;
    }


    updateValue(i, j, value) {
        document.getElementById(this.id+"_"+i+"_"+j).value=value;
    }

    initialize_matrix_values() {
        // Generate a random integer between 0 and 9
        for(var i=0; i<this.rows ; i++){
            for(var j=0; j<this.cols; j++){
                var randomInteger = Math.floor(Math.random() * 10);
                this.updateValue(i,j,randomInteger);
            }
        }
    }
}

input_matrix = new matrix(1, 10, "matrix")
output_matrix = new matrix(1, 10, "matrix2")
calc_matrix = new matrix(1, 10, "matrix3")
input_matrix.initialize_matrix_values();

class counting_matrix{
    constructor(input_matrix,output_matrix,calc_matrix){
        this.input_matrix=input_matrix;
        this.output_matrix=output_matrix;
        this.calc_matrix=calc_matrix;
        this.calc_matrix_show();
    }
    
    async calc_matrix_show(){
        for(var i=0; i<this.input_matrix.rows; i++){
            for(var j=0; j<this.input_matrix.cols; j++){
                
        
                        

                document.getElementById(this.input_matrix.id+"_"+i+"_"+j).style.backgroundColor = "red";
                var val=document.getElementById(this.input_matrix.id+"_"+i+"_"+j).value;                
                // document.getElementById(this.calc_matrix+"_"+0+"_"+val).value=document.getElementById(this.calc_matrix+"_"+i+"_"+val).value+1
                document.getElementById(this.calc_matrix.id + "_" + 0 + "_" + val).value = parseInt(document.getElementById(this.calc_matrix.id + "_" + i + "_" + val).value    ) + 1;
                document.getElementById(this.calc_matrix.id + "_" + 0 + "_" + val).style.backgroundColor="red"

                await new Promise(resolve => setTimeout(resolve, 2000)); 
                document.getElementById(this.input_matrix.id+"_"+i+"_"+j).style.backgroundColor = "white";
                document.getElementById(this.calc_matrix.id + "_" + 0 + "_" + val).style.backgroundColor="white"

            }
        }

    }
    
}
try1=new counting_matrix(input_matrix,output_matrix,calc_matrix);