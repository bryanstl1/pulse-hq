"""Art-directed isometric fallback using CC0 Kenney Furniture Kit PNG renders.
Not a gameplay simulation or substitute for the WebGL authored scene.
"""
from PIL import Image,ImageDraw,ImageFilter
from pathlib import Path
import json,math
W,H=2200,1250
root=Path(__file__).resolve().parents[1]
asset=root.parent/'asset-research/furniture/Isometric'
out=root/'prototype/public/assets'
S=3
canvas=Image.new('RGBA',(W*S,H*S),'#ebe9e2');draw=ImageDraw.Draw(canvas)
rooms=[
 ('direction',-8.6,-4.75,7.1,7.5,'#dfd0bf'),('creative',-.5,-5.2,8.4,6.5,'#ebd7cb'),
 ('technology',8.45,-4.25,7.2,8.4,'#d4dddd'),('lounge',-7.75,5.65,8.7,5.9,'#d6dac6'),
 ('boardroom',6.2,5.4,10.2,6.25,'#dcd3c7')]
def xy(x,z,y=0):return (int((1100+(x-z)*42)*S),int((616+(x+z)*21-y*64)*S))
def poly(coords,fill,outline=None,width=1):draw.polygon([xy(*p) for p in coords],fill=fill);outline and draw.line([xy(*p) for p in coords+[coords[0]]],fill=outline,width=width*S,joint='curve')
def axis(x,z,w,d):return [(x-w/2,z-d/2),(x+w/2,z-d/2),(x+w/2,z+d/2),(x-w/2,z+d/2)]
# Outer foundation and the two crossing corridors.
poly(axis(0,0,30,20),'#b6afa4','#81796e',3)
poly(axis(0,0,29.8,19.8),'#e7e0d2','#c9c1b2',1)
poly(axis(0,1.8,4.1,16.8),'#d2c9b7');poly(axis(0,.1,28.8,1.65),'#d4ccbb')
# Tiled floor with subtle stone joints. Each room has a distinct material tint.
for name,x,z,w,d,col in rooms:
 poly(axis(x,z,w,d),'#a9a298','#716c64',2)
 poly(axis(x,z,w-.1,d-.1),col,'#faf5ec',1)
 for ix in range(math.ceil(w)):
  for iz in range(math.ceil(d)):
   xx=x-w/2+ix+.5;zz=z-d/2+iz+.5
   if xx>x+w/2-.12 or zz>z+d/2-.12:continue
   hue=col
   draw.polygon([xy(*v) for v in axis(xx,zz,.96,.96)],fill=hue,outline='#f2ebdf',width=S)
 # rear and side wall cast shadows and give room height
 bx=x-w/2;rx=x+w/2;bz=z-d/2;fz=z+d/2
 for offset in range(9,0,-3):
  draw.polygon([xy(bx,bz),xy(rx,bz),xy(rx,bz,offset/7),xy(bx,bz,offset/7)],fill=(78,68,58,8))
 draw.polygon([xy(bx,bz),xy(rx,bz),xy(rx,bz,1.6),xy(bx,bz,1.6)],fill='#f7f2e8',outline='#9f9789',width=S)
 draw.polygon([xy(bx,bz),xy(bx,fz),xy(bx,fz,1.2),xy(bx,bz,1.6)],fill='#e4dcd0',outline='#9e9487',width=S)
 # window inset on the far wall, with crisp frame and crossbar
 def backrect(t0,t1):
  p=[xy(bx+w*t0,bz,.68),xy(bx+w*t1,bz,.68),xy(bx+w*t1,bz,1.43),xy(bx+w*t0,bz,1.43)]
  draw.polygon(p,fill='#b6ced0',outline='#819c99',width=S)
  draw.line([xy(bx+w*(t0+t1)/2,bz,.68),xy(bx+w*(t0+t1)/2,bz,1.43)],fill='#f4ebdb',width=3*S)
 backrect(.14,.39)
 draw.line([xy(bx,bz,1.65),xy(rx,bz,1.65)],fill='#b6a892',width=5*S)
 draw.line([xy(bx,bz,1.58),xy(bx,fz,1.16)],fill='#c6b9a6',width=4*S)
# Props: source package supplies the modeled/isometric furniture, not approximated geometry.
props=[]
def put(name,x,z,scale=1.2,orientation='SE',rise=0):props.append((x+z,name,x,z,scale,orientation,rise))
for name,x,z,s in [
 ('rugRectangle',-8.8,-4.6,1.75),('desk',-8.7,-4.6,1.42),('chairDesk',-8.7,-3.65,1.3),('computerScreen',-8.7,-4.7,1.2),('bookcaseClosedWide',-11.3,-7.35,1.4),('loungeChair',-6.8,-2.4,1.25),('sideTableDrawers',-10.8,-2.2,1.25),('pottedPlant',-5.8,-7.2,1.2),('books',-11.1,-6.8,.9),
 ('rugRectangle',-.6,-5.3,1.8),('desk',-2.85,-5.25,1.35),('chairDesk',-2.85,-4.3,1.25),('computerScreen',-2.85,-5.3,1.1),('desk',.2,-5.9,1.35),('chairDesk',.2,-4.95,1.25),('computerScreen',.2,-5.95,1.1),('deskCorner',2.18,-6.9,1.25),('bookcaseOpenLow',2.65,-2.88,1.1),('plantSmall3',3.2,-7.45,1.5),('lampRoundFloor',-4,-7.55,1.1),
 ('rugRectangle',8.4,-4.5,1.8),('desk',6.45,-4.8,1.35),('chairDesk',6.45,-3.85,1.2),('computerScreen',6.45,-4.85,1.1),('desk',9.35,-4.8,1.35),('chairDesk',9.35,-3.85,1.2),('computerScreen',9.35,-4.85,1.1),('bookcaseClosedWide',11,-7.5,1.25),('bookcaseOpenLow',5.8,-7.45,1.2),('pottedPlant',5.7,-1.0,1.1),
 ('rugRectangle',-7.7,5.5,1.9),('loungeSofaLong',-9.3,4.05,1.4),('loungeChair',-5.4,5.7,1.35),('tableCoffeeGlassSquare',-7.5,6.1,1.3),('sideTable',-10.6,6.2,1.2),('bookcaseOpenLow',-10.5,3,1.1),('pottedPlant',-4.4,3.2,1.3),('plantSmall2',-10.8,7.9,1.4),
 ('rugRectangle',6.2,5.4,1.9),('tableGlass',6.25,5.55,1.7),('televisionModern',6.1,2.66,1.25),('bookcaseClosedWide',10.2,2.75,1.1),('pottedPlant',10.55,7.45,1.15)]:put(name,x,z,s)
for x in [4.25,6.25,8.25]:
 for z in [3.93,7.1]:put('chairModernCushion',x,z,1.1)
for x in [-12.55,12.55]:
 for z in [-.4,1.55]:put('pottedPlant',x,z,1.2)
for _,name,x,z,scale,orientation,rise in sorted(props,key=lambda p:p[0]):
 p=asset/f'{name}_{orientation}.png'
 if name.startswith('rug'):continue
 if not p.exists():continue
 im=Image.open(p).convert('RGBA')
 # Bring saturated kit hues into the warm architectural palette without replacing the authored mesh art.
 pixels=im.load()
 for yy in range(im.height):
  for xx in range(im.width):
   rr,gg,bb,aa=pixels[xx,yy]
   if aa and rr>gg*1.38 and gg>bb*1.05 and rr>110: pixels[xx,yy]=(int(rr*.79),int(gg*.86),int(bb*1.22),aa)
   elif aa and rr>bb*1.8 and gg>bb*1.35 and rr>170: pixels[xx,yy]=(int(rr*.78),int(gg*.84),int(bb*1.28),aa)
 im=im.resize((int(im.width*scale*S),int(im.height*scale*S)),Image.Resampling.LANCZOS)
 sx,sy=xy(x,z,rise);shadow=Image.new('RGBA',im.size,(0,0,0,0));sd=ImageDraw.Draw(shadow);sd.ellipse((im.width*.2,im.height*.85,im.width*.8,im.height*.99),fill=(53,54,49,37));shadow=shadow.filter(ImageFilter.GaussianBlur(9*S));canvas.alpha_composite(shadow,(sx-im.width//2,sy-im.height+8*S));canvas.alpha_composite(im,(sx-im.width//2,sy-im.height))
# Central entry flowerbeds and floor motifs.
for x,z in [(-2.1,2.1),(2.3,2.1)]:
 p=asset/'pottedPlant_SE.png';im=Image.open(p).convert('RGBA').resize((80,240),Image.Resampling.LANCZOS);sx,sy=xy(x,z);canvas.alpha_composite(im,(sx-40,sy-240))
canvas.convert('RGB').resize((W,H),Image.Resampling.LANCZOS).save(out/'office-map.webp','WEBP',quality=91,method=6)
print('Saved',out/'office-map.webp',(out/'office-map.webp').stat().st_size)
