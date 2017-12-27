import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  items = [
    {
      "name":"Joe",
      "label":"Label1",
      "description":"something..."
    },
    {
      "name":"James",
      "label":"Label2",
      "description":"something more..."
    },
    {
      "name":"Josh",
      "label":"Label3",
      "description":"something else..."
    },
  ];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

    constructor() {}
    ngOnInit(): void {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnailsRemainingCount:true,
                thumbnailsArrows: false,
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: true
            },
            // max-width 800
            {
                image: true,
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                imageArrows:true,
                arrowPrevIcon: 'fa fa-arrow-circle-left',
                arrowNextIcon: 'fa fa-arrow-circle-right',
            }
        ];

        this.galleryImages = [
            {
                small: '../../assets/Jellyfish.jpg',
                medium: '../../assets/Jellyfish.jpg',
                big: '../../assets/Jellyfish.jpg'
            },
            {
              small: '../../assets/Jellyfish.jpg',
              medium: '../../assets/Jellyfish.jpg',
              big: '../../assets/Jellyfish.jpg'
            },
            {
              small: '../../assets/Jellyfish.jpg',
              medium: '../../assets/Jellyfish.jpg',
              big: '../../assets/Jellyfish.jpg'
            },
            {
              small: '../../assets/Jellyfish.jpg',
              medium: '../../assets/Jellyfish.jpg',
              big: '../../assets/Jellyfish.jpg'
            },
            {
              small: '../../assets/Jellyfish.jpg',
              medium: '../../assets/Jellyfish.jpg',
              big: '../../assets/Jellyfish.jpg'
            },
        ];
    }

}
