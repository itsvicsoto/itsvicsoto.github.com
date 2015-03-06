---
layout: cheatsheet
---

# [cheatsheet] jQuery

#### Iterating something

{% highlight js linenos %}

## Sample

$.each('.mark-solo', function(index) {
    selectedNotification.push($(this).data('activityId'));
});
{% endhighlight %}