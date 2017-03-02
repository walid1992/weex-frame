<template>
  <div style="overflow: hidden; flex-direction: row;" @appear="appeared" @disappear="disappeared">
    <slot></slot>
  </div>
</template>

<style>
  .wrap {
    overflow: hidden;
  }
</style>

<script>
  function format (str) {
    if (str.length >= 2) {
      return str
    } else {
      return '0' + str
    }
  }

  function getTime (target, now) {
    let remain = parseInt((target - now) / 1000)
    let D = String(parseInt(remain / 86400))
    let DD = format(D)
    let h = String(parseInt((remain - parseInt(D) * 86400) / 3600))
    let hh = format(h)
    let H = String(parseInt(remain / 3600))
    let HH = format(H)
    let m = String(parseInt((remain - parseInt(H) * 3600) / 60))
    let mm = format(m)
    let M = String(parseInt(remain / 60))
    let MM = format(M)
    let s = String(remain - parseInt(M) * 60)
    let ss = format(s)
    let S = String(remain)
    let SS = format(S)
    return {
      D: D, DD: DD,
      h: h, hh: hh,
      H: H, HH: HH,
      m: m, mm: mm,
      M: M, MM: MM,
      s: s, ss: ss,
      S: S, SS: SS
    }
  }

  module.exports = {
    props: {
      remain: {
        default: 0
      }
    },
    data: function () {
      return {
        now: 0,
        target: 0,
        outofview: false
      }
    },
    created () {
      this.now = Date.now()
      this.target = this.now + this.remain * 1000
      if (this.remain > 0) {
        this.run()
      }
    },
    methods: {
      run: function () {
        if (!this.outofview) {
          this.now = Date.now()
        }
        let time = getTime(this.target, this.now)
        if (this.target >= this.now) {
          this.$emit('tick', time)
        } else {
          this.$emit('alarm', time)
          return
        }
        setTimeout(this.run.bind(this), 1000)
      },
      appeared: function () {
        this.outofview = false
      },
      disappeared: function () {
        this.outofview = true
      }
    }
  }
</script>
