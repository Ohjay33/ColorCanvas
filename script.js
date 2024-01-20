function setupColorPicker(initialColor, parentTag, text, onChange) {
	const colorPicker = createColorPicker(initialColor)
	makeLabel(colorPicker, parentTag, text)
	colorPicker.changed(onChange)
	return colorPicker
  }


var bgColor = '#fbf8f3'


  function setupBgColorPicker(parentTag) {
	const bgColorPicker = setupColorPicker(bgColor, parentTag, 'Background color', function () {
	  bgColor = bgColorPicker.color()
	  resetCanvas()
	})
  }

   // set up background style tools Background category
   const backgroundStyles = select('section.toolbox div.background-tools')
   setupBgColorPicker(backgroundStyles)