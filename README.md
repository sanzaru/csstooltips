# csstooltips
CSS Tooltip library

### Possible classes:
<dl>
<dt>cssttp (required):<dd>The class to setup the tooltip.</dd></dt>
<dt>fade-in (optional):<dd>If set the tooltip will fade in.</dd></dt>
<dt>right (optional):<dd>If set the tooltip will be shown on the right side.</dd></dt>
<dt>left (optional):<dd>If set the tooltip will be shown on the left side.</dd></dt>
<dt>top (optional):<dd>If set the tooltip will be shown above.</dd></dt>
</dl>

## Simple example:
```html
<span class="cssttp fade-in example">
	<span>Simple tooltip example</span>
	<div class="cssttp-content">
		<i class="fa fa-info-circle"></i> Hello, I'm a tooltip!
	</div>
</span>
```

## Left example:
```html
<span class="cssttp fade-in left example" style="margin-left: 250px;">
	<span>Simple tooltip example</span>
	<div class="cssttp-content">
		<i class="fa fa-info-circle"></i> Hello, I'm a tooltip!
	</div>
</span>
```

## Right example:
```html
<span class="cssttp fade-in right example">
	<span>Simple tooltip example</span>
	<div class="cssttp-content">
		<i class="fa fa-info-circle"></i> Hello, I'm a tooltip!
	</div>
</span>	
```

## Top example:
```html
<span class="cssttp fade-in top example">
	<span>Simple tooltip example</span>
	<div class="cssttp-content">
		<i class="fa fa-info-circle"></i> Hello, I'm a tooltip!
	</div>
</span>	
```

## Inside text:
```html
<p>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et <span class="cssttp help
textinfo">accusam<span class="cssttp-content">Help 01</span></span> et justo duo dolores et ea rebum. 
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
<span class="cssttp help textinfo">aliquyam<span class="cssttp-content">Help 02</span></span> erat, sed
diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
<span class="cssttp help textinfo">sadipscing<span class="cssttp-content">Help 03</span></span> elitr, sed
diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
ipsum dolor sit amet.
</p>
```
