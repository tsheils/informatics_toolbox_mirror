import {Component, Input, OnInit} from '@angular/core';
import {Tool} from "../../models/tool";
import {StructureSetterService} from "../../widgets/marvin-sketcher/services/structure-setter.service";
import {MolConverterService} from "../../widgets/marvin-sketcher/services/mol-converter.service";
import {debounceTime, distinctUntilChanged} from "rxjs/internal/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-similarity',
  templateUrl: './similarity.component.html',
  styleUrls: ['./similarity.component.scss']
})
export class SimilarityComponent implements OnInit {
    @Input() tool: Tool;
    typeCtrl: FormControl = new FormControl();
    percentCtrl: FormControl = new FormControl();
    smilesCtrl: FormControl = new FormControl();
    structure: any;

  constructor(
      private molConverter: MolConverterService,
      private structureSetter: StructureSetterService
  ) { }

  ngOnInit() {
      this.molConverter.smiles$.subscribe(response => {
          if (response.structure.smiles !== '') {
              this.structure = response.structure;
              this.smilesCtrl.setValue(response.structure.smiles);
          }
      });

      this.smilesCtrl.valueChanges.pipe(
          debounceTime(400),
          distinctUntilChanged(),
      ).subscribe(smiles => {
          ///   this.http.get<Structure>(`${environment.structureUrl})
          this.structureSetter.setStructure(smiles);
      });
  }
}
