import Bindery from 'Bindery';

let breakRule = Bindery.PageBreak({
  selector: 'h2',
  position: 'before',
});

let spreadRule = Bindery.FullBleedSpread({
  selector: '.big-figure',
});

Bindery.makeBook({ 
  content: ".content",
  rules: [ breakRule, spreadRule ],
});