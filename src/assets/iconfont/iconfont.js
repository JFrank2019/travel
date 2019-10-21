!(function(s) {
  var e,
    n =
      '<svg><symbol id="icon-jiantou" viewBox="0 0 1024 1024"><path d="M151.476947 199.553918l718.53082 0c39.763632 0 71.922053 31.909757 71.922053 71.675436 0 18.485003-7.095605 35.205826-18.486026 47.872311L568.114019 793.227056c-23.810289 31.400151-68.641333 37.993313-100.29731 14.183024-5.570879-4.052293-10.384511-8.873088-14.183024-14.190187L94.235245 314.041416c-23.547299-31.407314-17.217127-76.479859 14.436804-100.041484 12.922311-9.881045 27.864628-14.43885 42.804898-14.43885l0 0L151.476947 199.553918zM151.476947 199.553918"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M736 1024l-512-512 505.6-512 70.4 70.4L358.4 512l441.6 448L736 1024z"  ></path></symbol><symbol id="icon-tupian" viewBox="0 0 1024 1024"><path d="M892.4 221.4c-13.1-13-28.7-19.5-47.1-19.5H178.7c-18.3 0-34 6.5-47.1 19.5-13.1 13.1-19.5 28.8-19.5 47.1v506.7c0 18.3 6.5 34 19.5 47.1 13.1 13 28.8 19.5 47.1 19.5h666.8c18.3 0 34-6.5 47.1-19.5 13-13.1 19.5-28.8 19.5-47.1V268.5c-0.1-18.5-6.6-34.1-19.7-47.1zM241.9 331.7c15.5-15.5 34.4-23.3 56.7-23.3s41.2 7.8 56.7 23.3c15.5 15.6 23.3 34.4 23.3 56.7s-7.8 41.1-23.3 56.7c-15.6 15.6-34.4 23.3-56.7 23.3s-41.1-7.8-56.7-23.3c-15.6-15.5-23.3-34.4-23.3-56.7s7.8-41.1 23.3-56.7z m563.4 403.4H218.7v-80l133.4-133.4 66.7 66.7 213.3-213.3 173.3 173.3v186.7z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M897.2 882.3l-210-221.1c54.5-57.7 85.6-132.5 87.5-212.4 2.1-86-28.8-167.7-88.1-230.1-59.3-62.5-139.4-98.2-225.3-100.4h-8.5c-82.8 0-161.2 31-221.6 88.1-128.7 122.3-134.6 326.8-12.3 455.5 59.3 62.5 139.4 98.2 225.3 100.4h9.1c76.3 0 148.6-26.8 206.7-75.4l210.1 221.2 27.1-25.8zM453.3 719.5h-8.5c-74.3-2-143.5-32.9-194.9-87.1-106-111.5-101.1-288.7 10.7-395 52-49.3 120.3-76.4 192.2-76.4h8c74.3 2 143.5 32.9 194.9 87.1 51.1 53.9 78.2 124.8 76.4 199.7-1.9 74.5-32.8 143.9-86.9 195.2-52.7 49.3-120.8 76.5-191.9 76.5z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[e.length - 1].getAttribute('data-injectcss')
  if (t && !s.__iconfont__svg__cssinject__) {
    s.__iconfont__svg__cssinject__ = !0
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) setTimeout(e, 0)
      else {
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e()
        }
        document.addEventListener('DOMContentLoaded', t, !1)
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = s.document),
        (c = !1),
        (l = function() {
          try {
            i.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(l, 50)
          }
          n()
        })(),
        (i.onreadystatechange = function() {
          'complete' == i.readyState && ((i.onreadystatechange = null), n())
        }))
    function n() {
      c || ((c = !0), o())
    }
    var o, i, c, l
  })(function() {
    var e, t
    ;((e = document.createElement('div')).innerHTML = n),
      (n = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (function(e, t) {
          t.firstChild
            ? (function(e, t) {
                t.parentNode.insertBefore(e, t)
              })(e, t.firstChild)
            : t.appendChild(e)
        })(t, document.body))
  })
})(window)
