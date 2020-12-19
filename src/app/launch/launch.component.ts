import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class RocketLaunchComponent implements OnInit {

  @Input() details;
  imgSrc;
  constructor() { }

  ngOnInit(): void {
    this.imgSrc = this.details.links.mission_patch_small;
  }

}
