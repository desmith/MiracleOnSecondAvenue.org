var audioTagSupport = !!(document.createElement('audio').canPlayType);
if (audioTagSupport) {
  // Use HTML5 audio element
  document.write("<audio autobuffer preload='auto' autoplay>");
  document.write("<source src='https://s3.amazonaws.com/mgsangamedia/audio/HareKrsnaMantraSoft.mp3'>");
  document.write("<source src='https://s3.amazonaws.com/mgsangamedia/audio/HareKrsnaMantraSoft.ogg'>");
  document.write("</audio>");
} else {
  // Flash
  document.write("<embed type='application/x-shockwave-flash' src='http://www.google.com/reader/ui/3247397568-audio-player.swf?audioUrl=https://s3.amazonaws.com/mgsangamedia/audio/HareKrsnaMantraSoft.mp3' width='400' height='27' allowscriptaccess='never' quality='best' bgcolor='#ffffff' wmode='window' flashvars='playerMode=embedded' />");
}

