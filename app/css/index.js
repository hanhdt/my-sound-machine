import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'background': '#0C7CA2',
    'height': [{ 'unit': 'px', 'value': 725 }],
    'overflow': 'hidden',
    'width': [{ 'unit': 'px', 'value': 368 }],
    'WebkitAppRegion': 'drag',
    'WebkitUserSelect': 'none'
  },
  'body': {
    'background': '#0C7CA2',
    'height': [{ 'unit': 'px', 'value': 725 }],
    'overflow': 'hidden',
    'width': [{ 'unit': 'px', 'value': 368 }],
    'WebkitAppRegion': 'drag',
    'WebkitUserSelect': 'none'
  },
  '#main': {
    'background': '#1DCCEB',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#73E2F7' }],
    'height': [{ 'unit': 'px', 'value': 700 }]
  },
  'speaker': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }],
    'textAlign': 'center'
  },
  'speaker img': {
    'height': [{ 'unit': 'px', 'value': 194 }],
    'width': [{ 'unit': 'px', 'value': 274 }]
  },
  '#main h1': {
    'color': '#fff',
    'paddingRight': [{ 'unit': 'px', 'value': 6 }],
    'paddingTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'right',
    'textIndent': '-10000px'
  },
  '#main h1 img': {
    'height': [{ 'unit': 'px', 'value': 31 }],
    'width': [{ 'unit': 'px', 'value': 195 }]
  },
  'buttons': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  'buttons>div': {
    'textAlign': 'center'
  },
  'button-sound': {
    'backgroundColor': '#0C7CA2',
    'borderRadius': '100%',
    'cursor': 'pointer',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': 57 }],
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#044D7F' }],
    'WebkitAppRegion': 'no-drag'
  },
  'button-sound:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#044D7F' }],
    'top': [{ 'unit': 'px', 'value': 2 }]
  },
  'button-sound:hover>span': {
    'top': [{ 'unit': 'px', 'value': -42 }]
  },
  'button-sound:active': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#044D7F' }],
    'top': [{ 'unit': 'px', 'value': 5 }]
  },
  'button-sound:active>span': {
    'top': [{ 'unit': 'px', 'value': -45 }]
  },
  'button-icon': {
    'backgroundSize': '30px 30px',
    'backgroundRepeat': 'no-repeat',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'left': [{ 'unit': 'px', 'value': -2 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -40 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'WebkitAppRegion': 'no-drag'
  },
  'settings': {
    'cursor': 'pointer',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 32 }],
    'position': 'absolute',
    'textIndent': '-10000px',
    'top': [{ 'unit': 'px', 'value': 6 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'zIndex': '1',
    'WebkitAppRegion': 'no-drag'
  },
  'close': {
    'cursor': 'pointer',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 32 }],
    'position': 'absolute',
    'textIndent': '-10000px',
    'top': [{ 'unit': 'px', 'value': 6 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'zIndex': '1',
    'WebkitAppRegion': 'no-drag'
  },
  'settings': {
    'background': 'transparent url('../img/settings.png') no-repeat 4px 4px',
    'backgroundSize': '24px 24px',
    'right': [{ 'unit': 'px', 'value': 38 }]
  },
  'close': {
    'background': 'transparent url('../img/close.png') no-repeat 4px 4px',
    'backgroundSize': '24px 24px',
    'right': [{ 'unit': 'px', 'value': 6 }]
  }
});
