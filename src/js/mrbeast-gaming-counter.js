console.info("Big brain console stuff incoming...")

const startingSubs = {
    timestamp: 1586629850388,
    count: 6520
}

var subs = startingSubs.count;
var officialCount = 0;



async function request() {
    let key = APIKeys[Math.floor(Math.random() * APIKeys.length)]
    let req1 = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=UCIPPMRA040LQr5QPyJEbmXA&type=channel&fields=items/snippet&key=${key}`)
    let req2 = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCIPPMRA040LQr5QPyJEbmXA&key=${key}`)
    let data1 = await req1.json()
    let data2 = await req2.json()
    if (!((Math.round((Date.now() - startingSubs.timestamp) / 2e3)) % 40)) {
        subs += -1
    }

    if (!((Math.round((Date.now() - startingSubs.timestamp) / 2e3)) % 6)) {
        subs++
    }
    if (data1.error || data2.error) {
        console.error(`${key} is invalid.`)
        notes.innerHTML = "Oops, YouTube API Key didn't work."
    } else {
        if (officialCount !== data2.items[0].statistics.subscriberCount) subs = data2.items[0].statistics.subscriberCount
        officialCount = data2.items[0].statistics.subscriberCount
        document.getElementById("name").innerHTML = data1.items[0].snippet.title
        description.innerHTML = data1.items[0].snippet.description
        if (data2.items[0].statistics.hiddenSubscriberCount) {
            notes.innerHTML = "This user's subscriber count is hidden."
        } else {
            notes.innerHTML = "Warning: This counter might not be 100% accurate and auto syncs with the YouTube API."
        }
        count.innerHTML = subs
        chart.series[0].addPoint([Date.now(), parseInt(subs, 10)])
        
    }

}

var chart = new Highcharts.chart({
  chart: {
      renderTo: 'chart',
      type: 'spline',
        zoomType: 'x',
        backgroundColor: 'transparent',
        plotBorderColor: 'transparent'
  },
  title: {
      text: 'Subscriber Graph'
  },
  xAxis: {
      type: 'datetime',
      tickPixelInterval: 500,
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#fff'
            }
        },
        lineColor: '#999',
        minorGridLineColor: '#999',
        tickColor: '#999',
        title: {
            style: {
                color: '#fff'
            }
        }
  },
  yAxis: {
      title: {
          text: ''
      },
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#fff'
            }
        },
        lineColor: '#999',
        minorGridLineColor: '#999',
        tickColor: '#999'
  },

  series: [{
    name: 'Subs',
    marker: { enabled: false },
    color: '#fff',
    lineColor: '#fff'
  }]
});



setInterval(request, 2000)
