---
layout: post
title:  "Installation Guide"
date:   2015-01-10 00:00:00
categories: articles
description: "I built this website to serve as my personal playground for developing my front-end skills.
             This will also serve as my blog and repository for all the notes/cheatsheets I do during my development.
             I will be constantly keep this up to date for myself and for all who wanted to contribute to my docs.
             Have fun! If it’s good enough to be a reference I totally approve of it!"
---

### Welcome to my website!

I built this website to serve as my personal playground for developing my front-end skills.
This will also serve as my blog and repository for all the notes/cheatsheets I do during my development.
I will be constantly keep this up to date for myself and for all who wanted to contribute to my docs. Have fun! If it's good enough to be a reference I totally approve of it!

### stacks

* NodeJS
* Jekyll
* SASS
* submodule - https://github.com/itsvicsoto/itsvicss using inuitcss by harry roberts

### Getting Started

I built this to run on NodeJS (when i decided to move it out of git pages) but for now everything is compiled in jekyll and run on NodeJS. Compass is used to compile css.

1. git clone git@github.com:itsvicsoto/itsvicsoto.github.com.git **your-directory-name**
2. cd **your-directory-name** (by default your branch is gonna be development)
3. git submodule init
4. git submodule update
5. npm start (start reading the compiled jekyll)
6. cd application
7. jekyll build --watch
8. cd **your-directory-name**/source/itsvicssx
9. compass watch
10. do not forget to access localhost:5005
11. change settings as you like

### Inspiration

* CSSWizardry
* SMACSS

#### Code Snippet Sample
{% highlight js linenos %}
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
                                }
today =  days[now.getDay()] + ", " +
         months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;

document.write(today);
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
