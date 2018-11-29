import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';



//this code randomly changes the body colour of the page every time page is reset
var colors = ['#FF4D63', '#3848AC', '#513584', '#9D4075', '#4D7AFF', '#875EEF', '#525561'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
var pageColor = document.body;
console.log(pageColor);

var changeColor = function() {
  console.log(randomColor);
  pageColor.style.backgroundColor = randomColor;
  console.log("got here");
};

changeColor();





@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})


export class PostCreateComponent implements OnInit {

  constructor(private service:PostService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.title, form.value.content, form.value.genre).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
