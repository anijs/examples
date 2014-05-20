AniJS - A ScrollReveal Demo
===============================

##Intro 

ScrollReveal is an [AniJS](anijs.github.io) helper function, which allow you to make animation to the scroll elements. If you don't now nothing about [AniJS](anijs.github.io), you can find documentation an examples at the [official site](anijs.github.io).

##Using 

1 - Put the ScrollReveal helper file on your page after the AniJS core file. 

```xml
<!-- AniJS Core File -->
<script src="anijs-min.js"></script>

<!-- ScrollReveal Helper -->
<script src="helpers/anijs-helper-scrollreveal-min.js"></script>
```

2 - Add the before helper function Definition with the **scrollReveal** name to all element de los cuales usted espera un scrollReveal behavior. 

```xml
<div class="item" data-anijs="if: scroll, on: window, do: swing animated, before: scrollReveal"></div>
```

3 - Don't forget to add the CSS animation styles definition. 

```xml
<head>
    <!-- Animate.css library -->
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/animatecss/3.1.0/animate.css">
</head>
```

4 - Full initialization code:
```xml
<head>
    <!-- Animate.css library -->
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/animatecss/3.1.0/animate.css">
</head>
<body>
    <div id="item" data-anijs="if: scroll, on: window, do: swing animated, before: scrollReveal">
    	Cuba 2022
    </div>

    <!-- AniJS Core File -->
    <script src="bower_components/anijs/dist/anijs-min.js"></script>
    <!-- ScrollReveal Helper -->
    <script src="bower_components/anijs/dist/anijs-helper-scrollreveal-min.js"></script>
</body>
```

More details about usar AniJS go to [AniJS Official Website](http://anijs.github.io/#using).

**Would you like to write your own helpers functions?**

Please read about it in [Writing before and after functions ](https://github.com/anijs/anijs/wiki/Writing-before-and-after-functions).
