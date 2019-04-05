import {Component, Input, OnInit} from '@angular/core';
import {Tool} from '../../models/tool';
import {NCATSImage} from '../../models/ncatsimage';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-ncatsfind-excel',
  templateUrl: './ncatsfind-excel.component.html',
  styleUrls: ['./ncatsfind-excel.component.css']
})
export class NcatsFindExcelComponent implements OnInit {
    @Input() tool: Tool;
    imgSrcBase: string;
    images: NCATSImage[];
    fileSrc: string;

    ngOnInit() {
        this.imgSrcBase = './assets/images/' + this.tool.toolName.toLowerCase().replace(/ /g, '-');
        this.images = [
            new NCATSImage({url: this.imgSrcBase + '/primary.png',
                caption: 'Adds a toolbar to add functionality related to drug/compound resolving.'}),
            new NCATSImage({url: this.imgSrcBase + '/resolve.png',
                caption: 'Allows users to resolve a set of names/codes/smiles/identifiers to a set of desired outputs.' +
                ' For example, the name “aspirin” can be resolved to its structure (smiles) as well as the related NCGC' +
                ' IDs in the NCATS collection and aspirin’s Mechanism Of Action, if annotated.'}),
            new NCATSImage({url: this.imgSrcBase + '/embed.png',
                caption: 'Structure images can be embedded into the worksheet, allowing a quick hover-over to see what ' +
                'structure corresponds to the cell. This will stay with the workbook, even when given to someone who ' +
                'does not have the add-in installed. The advantage to this structure rendering mechanism is that ' +
                'the structures don’t occupy as much real estate as embedding them in the cell directly, and Excel’s ' +
                'sort functions will still work well without issue.'})
        ];

        const env = environment.public ? 'public' : 'private';

        this.fileSrc = `./assets/files/${this.tool.toolName.toLowerCase().replace(/ /g, '-')}/SetupNCATSFind_${env}.zip`;
    }
}
