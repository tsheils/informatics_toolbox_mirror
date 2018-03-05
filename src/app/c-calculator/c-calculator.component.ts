import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-calculator',
  templateUrl: './c-calculator.component.html',
  styleUrls: ['./c-calculator.component.css']
})
export class CCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

         process(form) {
            this.deleteOutputTableRows();
            const table = document.getElementById("outputTable");
            let targetStrings = form.targetBox.value.split(/\s+/);
            let outputString = "Input Sequence,C911 Target,C911 Sense,C911 Antisense\n";
            console.log("Target Strings length: " + targetStrings.length);
            for (var i=0;i<targetStrings.length;i++) {
                console.log("Processing string number " +  i + "\n");
                let targetString = targetStrings[i];
                if (targetString == "") { continue; }
                var row: any = {} //table.insertRow(i+1);
                row.style.fontFamily = "Courier";
                var cell1 = row.insertCell(0);
// should change this to one cell for error messages, right?

                cell1.innerHTML = targetString;
                if (targetString.length != 21) {
                    var errorCell = row.insertCell(1);
                    errorCell.colSpan = "3";
                    errorCell.style.color = "red";
                    errorCell.style.textAlign = "center";
                    errorCell.innerHTML = "Target sequence is not 21 characters in length!";
                }
                else if (targetString.match(/[^ACGTUacgtu]/) != null) {
                    var errorCell = row.insertCell(1);
                    errorCell.colSpan = "3";
                    errorCell.style.color = "red";
                    errorCell.style.textAlign = "center";
                    errorCell.innerHTML = "Target sequence contains characters other than A,C,G,T or U!";
                }
                else {
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    let myC911 = this.getC911Target(this.convertDNAtoRNA(targetString));
                    cell2.innerHTML = myC911;
                    let senseString = this.getSense(myC911);
                    cell3.innerHTML = senseString;
                    let antisenseString = this.getAntisense(myC911);
                    cell4.innerHTML= antisenseString;
                }
// outputString += targetString + "," + myC911 + "," + senseString + "," + antisenseString + "\n";
            }
// form.outputBox.value = outputString;

// var w = window.open('','csvWindow'); // popup, may be blocked though
// the following line does not actually do anything interesting with the
// parameter given in current browsers, but really should have.
// Maybe in some browser it will. It does not hurt anyway to give the mime type
// w.document.open("application/vnd.ms-excel");
// w.document.write(outputString); // the csv string from for example a jquery plugin
// w.document.close();

        }

     deleteOutputTableRows() {
        var table=document.getElementById("outputTable");
        /*if (table.rows.length > 1) {
            for(var i = table.rows.length - 1; i > 0;i--) {
                table.deleteRow(i);
            }
        }*/
    }

     getAntisense(targetString) {
        let tmpSeq = this.reverseComplement(targetString);
        return tmpSeq.substr(0,19) + "d" + this.convertRNAtoDNA(tmpSeq).charAt(19) + "d" + this.convertRNAtoDNA(tmpSeq).charAt(20);
    }

     getSense(targetString) {
        return targetString.substr(2) + "dTdT";
    }

     getC911Target(targetString) {
        return targetString.substr(0,10) + this.complement(targetString.substr(10,3))  + targetString.substr(13);
    }

     reverseComplement(seqString) {
        return this.complement(seqString).split("").reverse().join("");
    }

     complement(seqString) {
        let returnString = "";
        for (let i=0;i<seqString.length;i++) {
            switch (seqString.charAt(i)) {
                case 'A':
                    returnString += 'U';
                    break;
                case 'C':
                    returnString += 'G';
                    break;
                case 'G':
                    returnString += 'C';
                    break;
                case 'U':
                    returnString += 'A';
                    break;
                default:
                    break;
            }}
        return returnString;
    }

// Convert bases (DNA to RNA (T -> U))

    convertDNAtoRNA(seqString) {
        return seqString.toUpperCase().replace(/T/g, "U");
    }

    convertRNAtoDNA(seqString) {
        return seqString.toUpperCase().replace(/U/g, "T");
    }
}
