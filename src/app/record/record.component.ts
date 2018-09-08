import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Grab elements, create settings, etc.
    let video: HTMLVideoElement;
    let dom;
    dom = document.getElementById('video');
    video = <HTMLVideoElement>dom;

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  private capture() {
    // do nothing.
  }

}
