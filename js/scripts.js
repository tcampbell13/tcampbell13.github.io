 <head>
   <meta charset="utf-8">
   <title>Taniya Campbell- Portfolio</title>
-  <link type="text/css" rel="stylesheet" href="stylesheets/normalize.css">
+  <link type="text/css" rel="stylesheet" href="stylesheets/normalize.css"> 
+    <!--The link above called "normalize" goes to a CSS page that reset all of the browser defaults. Needs to be on Every Page-->
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
+    <!--This is the link to the Bootstrap file, via CDN. This means you don't have to download it, it accesses a CSS page from the internet-->
+  <link type="text/css" rel="stylesheet" href="stylesheets/landing.css">
+    <!--This files goes to the CSS page I provided for the landing page. You can Open it as an example, but DO NOT EDIT IT! Any changes should go on a different CSS document-->
   <link type="text/css" rel="stylesheet" href="stylesheets/style.css">
+    <!--This file will be the one that you customize yourself, with your own code.-->
   <meta name="viewport" content="width=device-width, initial-scale=1">
+    <!--This makes the webpage check the size of the device it's on. This lets your page be mobile responsive-->
 </head>
 <body>
   <div class="jumbotron">
 @@ -87,7 +93,7 @@
 <footer>
     Footer
 </footer>
-
+<!--This stuff is the javascript information. The top is for jQuery, the second is Bootstrap, and the 3rd is one one you will edit-->
 	<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
 	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
 	<script src="js/scripts.js" type="text/javascript" charset="utf-8"></script>
View 0  js/scripts.js
No changes.
View 103  stylesheets/landing.css
@@ -0,0 +1,103 @@
+/**********************************
+GENERAL
+***********************************/
+
+
+/**********************************
+NAVIGATION 
+***********************************/
+
+
+
+/**********************************
+HEADER
+***********************************/
+
+.portrait{
+    max-width:auto;
+    max-height:250px;
+}
+
+.jumbotron{
+    text-align:center;
+    margin-bottom:10px;
+    height:500px;
+    padding-top:50px;
+}
+
+.portrait_name{
+    width:320px;
+    margin:0 auto;
+    padding:20px;
+    border-radius:20px;
+}
+
+/**********************************
+MAIN CONTENT
+***********************************/
+.thumbnail_space{
+    max-width:90%;
+    margin:0 auto;
+}
+
+.thumbnail_image{
+  max-height:200px;
+  max-width:242px;
+}
+
+article{
+    width:90%;
+    margin:0 auto;
+    padding:10px;
+    border-radius:10px;
+    margin-bottom:10px;
+}
+
+/**********************************
+FOOTER - Layout and Sizing
+***********************************/
+footer{
+    height:100px;
+    text-align:center;
+    padding:20px;
+}
+
+/**********************************
+PAGE: _______
+***********************************/
+
+
+
+/**********************************
+FONTS
+***********************************/
+
+
+
+/**********************************
+COLORS and BACKGROUNDS
+
+Color 1:
+Color 1:
+Color 1:
+Color 1:
+Color 1:
+
+***********************************/
+
+article{
+    background:#eee;
+}
+
+footer{
+    background:#eee;
+}
+
+.jumbotron{
+  background: url('https://picjumbo.imgix.net/HNCK8910.jpg?q=40&w=1650&sharp=30') no-repeat center;
+  background-size: cover;
+}
+
+.portrait_name{
+    background: rgba(230, 230, 230, 0.7);
+} 
View 104  stylesheets/style.css
@@ -1,49 +1,55 @@
-.portrait{
-    max-width:auto;
-    max-height:250px;
-}
-
-.jumbotron{
-    text-align:center;
-    margin-bottom:10px;
-}
-
-.thumbnail_space{
-    max-width:90%;
-    margin:0 auto;
-}
-article{
-    width:90%;
-    background:#eee;
-    margin:0 auto;
-    padding:10px;
-    border-radius:10px;
-    margin-bottom:10px;
-}
-
-footer{
-    height:100px;
-    background:#eee;
-    text-align:center;
-    padding:20px;
-}
-
-.thumbnail_image{
-  max-height:200px;
-  max-width:242px;
-}
-
-.jumbotron{
-  background: url('https://picjumbo.imgix.net/HNCK8910.jpg?q=40&w=1650&sharp=30') no-repeat center;
-  background-size: cover;
-  height:500px;
-  padding-top:50px;
-}
-
-.portrait_name{
-    background: rgba(230, 230, 230, 0.7);
-    width:320px;
-    margin:0 auto;
-    padding:20px;
-    border-radius:20px;
-} 
+/*
+  Built Mobile First: All Generic sizing and layouts are placed in main part of CSS. 
+  All sizing and layout changes specific to screen sizes is down in media-query area.
+  All color based things are seperate to allow for tweaking later out.
+*/
+
+/**********************************
+GENERAL
+***********************************/
+
+
+/**********************************
+NAVIGATION 
+***********************************/
+
+
+
+/**********************************
+HEADER
+***********************************/
+
+
+/**********************************
+MAIN CONTENT
+***********************************/
+
+
+/**********************************
+FOOTER - Layout and Sizing
+***********************************/
+
+
+/**********************************
+PAGE: _______
+***********************************/
+
+
+
+/**********************************
+FONTS
+***********************************/
+
+
+
+/**********************************
+COLORS and BACKGROUNDS
+
+Color 1:
+Color 1:
+Color 1:
+Color 1:
+Color 1:
+
+***********************************/
+