# Watermark Steganographic Images Concept

This is a concept for a project that I developed while exploring the idea of creating an invisible watermark for digital images. 

The approach used here is to simply convert each pixel's RGB values to it's 16 digit binary amounts and remove the least significant portion. We then take the most significant information from one image and place it within the least significant of the other. This works fairly well in some cases, but is an insufficient method for variety of circumstances. Particularly, in this rudimentary proof of concept, mix matching .png's (RGBA's) with .jpg's as well as different sizes, backgrounds, pattern complexity and contrast within the images can all produce unexpected results.
