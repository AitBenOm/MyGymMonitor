import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../program.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProgramModel} from "../program-model";

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  id: number;
  program: ProgramModel;
  constructor(private programService: ProgramService,
              private route: ActivatedRoute,
              private router: Router,
             ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.program = this.programService.getProgramById(this.id);
        }
      );
  }

}
