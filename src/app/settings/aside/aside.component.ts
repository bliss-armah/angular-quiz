import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideoptionsComponent } from 'src/app/components/asideoptions/asideoptions.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule,AsideoptionsComponent,RouterModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input() id!:string
constructor (private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id']
      }
    )
  }

}
