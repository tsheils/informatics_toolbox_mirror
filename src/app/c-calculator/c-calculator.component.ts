import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Meta} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Tool} from '../models/tool';

@Component({
    templateUrl: './c-calculator.component.html',
    styleUrls: ['./c-calculator.component.css']
})
export class CCalculatorComponent implements OnInit {
    data: any[] = [];
    sequenceCtrl = new FormControl();
    error: string;
    imgSrc: string;
    imgSrcBase: string;
    @Input() tool: Tool;

    ngOnInit() {
            this.imgSrcBase = '../../assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
            this.imgSrc = this.imgSrcBase + '/primary.png';
    }

    process() {
        this.deleteOutputTableRows();
        const targetStrings = this.sequenceCtrl.value.split(/\s+/);
        for (const targetString of targetStrings) {
            if (targetString === '') { continue; }

            if (targetString.length !== 21) {
                this.error = 'Target sequence is not 21 characters in length!';
            } else if (targetString.match(/[^ACGTUacgtu]/) != null) {
                this.error = 'Target sequence contains characters other than A,C,G,T or U!';
            } else {
                this.error = '';
                const row: any = {};
                row.cell1 = targetString;
                row.myC911 = this.getC911Target(this.convertDNAtoRNA(targetString));
                row.senseString = this.getSense(row.myC911);
                row.antisenseString = this.getAntisense(row.myC911);
                this.data.push(row);
            }
        }
    }

    deleteOutputTableRows() {
        this.data = [];
    }

    getAntisense(targetString) {
        const tmpSeq = this.reverseComplement(targetString);
        return tmpSeq.substr(0, 19) + 'd' + this.convertRNAtoDNA(tmpSeq).charAt(19) + 'd' + this.convertRNAtoDNA(tmpSeq).charAt(20);
    }

    getSense(targetString) {
        return targetString.substr(2) + 'dTdT';
    }

    getC911Target(targetString) {
        return targetString.substr(0, 10) + this.complement(targetString.substr(10, 3))  + targetString.substr(13);
    }

    reverseComplement(seqString) {
        return this.complement(seqString).split('').reverse().join('');
    }

    complement(seqString) {
        let returnString = '';
        for (let i = 0; i < seqString.length; i++) {
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
        return seqString.toUpperCase().replace(/T/g, 'U');
    }

    convertRNAtoDNA(seqString) {
        return seqString.toUpperCase().replace(/U/g, 'T');
    }
}
