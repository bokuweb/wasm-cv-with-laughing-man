// From https://github.com/robb/laughing-man.
class LaughingMan extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <style>
            @-webkit-keyframes rotate {
              from {
                -webkit-transform-origin: 170px 170px;
                -webkit-transform: rotate(0deg);
              }
            
              to {
                -webkit-transform-origin: 170px 170px;
                -webkit-transform: rotate(-360deg);
              }
            }

            @-moz-keyframes rotate {
              from {
                -moz-transform-origin: 170px 170px;
                -moz-transform: rotate(0deg);
              }
            
              to {
                -moz-transform-origin: 170px 170px;
                -moz-transform: rotate(-360deg);
              }
            }

            @-ms-keyframes rotate {
              from {
                -ms-transform-origin: 170px 170px;
                -ms-transform: rotate(0deg);
              }
            
              to {
                -ms-transform-origin: 170px 170px;
                -ms-transform: rotate(-360deg);
              }
            }
            
            @keyframes rotate {
              from {
                transform-origin: 170px 170px;
                transform: rotate(0deg);
              }
            
              to {
                transform-origin: 170px 170px;
                transform: rotate(-360deg);
              }
            }
            
            .outer {
              display: block;
              width: 340px;
              height: 340px;
              border: 10px solid blue;
              -webkit-border-radius: 340px;
              -moz-border-radius: 340px;
              border-radius: 340px;
              background: white;
              position: relative;
            }
            
            .outer, .outer * {
              margin: 0;
              padding: 0;
            }
            
            .inner {
              position: absolute;
              top: 39px;
              left: 39px;
              display: block;
              width: 220px;
              height: 220px;
              border: 21px solid blue;
              -webkit-border-radius: 220px;
              -moz-border-radius: 220px;
              border-radius: 220px;
              background: white;
            }
            
            .hat .tip {
              position: absolute;
              top: 32px;
              left: 162px;
              display: block;
              width: 16px;
              height: 10px;
              background: blue;
            }
            .hat .gap {
              position: absolute;
              top: 153px;
              left: 39px;
              display: block;
              width: 23px;
              height: 8px;
              background: white;
            }
            .hat .edge {
              position: absolute;
              top: 132px;
              left: 50px;
              display: block;
              width: 230px;
              height: 21px;
              background: blue;
            }
            .hat .rim {
              position: absolute;
              top: 132px;
              left: 278px;
              display: block;
              width: 91px;
              height: 34px;
              border-top: 21px solid blue;
              border-right: 21px solid blue;
              border-bottom: 21px solid blue;
              border-left: 0px solid white;
              
              -webkit-border-top-right-radius: 78px;
              -webkit-border-bottom-right-radius: 78px;
              -moz-border-radius-topright: 78px;
              -moz-border-radius-bottomright: 78px;
              border-top-right-radius: 78px;
              border-bottom-right-radius: 78px;
              
              background: white;
            }
            
            .eye {
              position: absolute;
              top: 100px;
              display: block;
              width: 50px;
              height: 25px;
              background: blue;
            	
              -webkit-border-top-left-radius: 50px;
              -webkit-border-top-right-radius: 50px;
              -moz-border-radius-topleft: 50px;
              -moz-border-radius-topright: 50px;
              border-top-left-radius: 50px;
              border-top-right-radius: 50px;
            }
            .eye.left {
              left: 36px;
            }
            .eye.right {
              right: 37px;
            }
            .eye .mask {
              position: absolute;
              top: 10px;
              left: -4px;
              display: block;
              width: 58px;
              height: 26px;
              background: white;
              
              -webkit-border-top-left-radius: 50px;
              -webkit-border-top-right-radius: 50px;
              -moz-border-radius-topleft: 50px;
              -moz-border-radius-topright: 50px;
              border-top-left-radius: 50px;
              border-top-right-radius: 50px;
            }
            
            .smile-wrapper {
              position: absolute;
              top: 127px;
              left: 14px;
              display: block;
              width: 192px;
              height: 80px;
              overflow: hidden;
            }
            .smile-wrapper .smile {
              position: relative;
              top: -25px;
              display: block;
              width: 192px;
              height: 105px;
              background: blue;
              border-left: 0 solid;
              border-right: 0 solid;
              border-bottom: 0 solid;
              border-top: none;
            	
              -webkit-border-bottom-left-radius: 210px;
              -webkit-border-bottom-right-radius: 210px;
              -moz-border-radius-bottomleft: 210px;
              -moz-border-radius-bottomright: 210px;
              border-bottom-left-radius: 210px;
              border-bottom-right-radius: 210px;
            }
            .smile-wrapper .smile .mask-wrapper {
              position: absolute;
              bottom: 23px;
              left: 23px;
              display: block;
              width: 145px;
              height: 36px;
              overflow: hidden;
              margin: auto;
            }
            .smile-wrapper .smile .mask-wrapper .mask {
              position: absolute;
              bottom: 0px;
              display: block;
              width: 145px;
              height: 72px;
              background: white;
            	
              -webkit-border-bottom-left-radius: 135px;
              -webkit-border-bottom-right-radius: 135px;
              -moz-border-radius-bottomleft: 135px;
              -moz-border-radius-bottomright: 135px;
              border-bottom-left-radius: 135px;
              border-bottom-right-radius: 135px;
            }
            
            cite {
              display: block;
              width: 340px;
              height: 340px;
              font-family: Impact, Helvetica, Arial;
              font-style: normal;
              font-size: 30px;
              color: blue;
              -webkit-animation: rotate 9s linear infinite;
              -moz-animation: rotate 9s linear infinite;
              -ms-animation: rotate 9s linear infinite;
              animation: rotate 9s linear infinite;
            }
            cite span {
              position: absolute;
              top: 155px;
              left: 155px;
              display: block;
              width: 30px;
              height: 30px;
              text-align: center;
            }
            cite span:nth-child(69n+0) {
              -webkit-transform: rotate(-33.739deg) translateY(-155px);
              -moz-transform: rotate(-33.739deg) translateY(-155px);
              -ms-transform: rotate(-33.739deg) translateY(-155px);
              -o-transform: rotate(-33.739deg) translateY(-155px);
              transform: rotate(-33.739deg) translateY(-155px);
            }
            cite span:nth-child(69n+1) {
              -webkit-transform: rotate(-27.478deg) translateY(-155px);
              -moz-transform: rotate(-27.478deg) translateY(-155px);
              -ms-transform: rotate(-27.478deg) translateY(-155px);
              -o-transform: rotate(-27.478deg) translateY(-155px);
              transform: rotate(-27.478deg) translateY(-155px);
            }
            cite span:nth-child(69n+2) {
              -webkit-transform: rotate(-25.913deg) translateY(-155px);
              -moz-transform: rotate(-25.913deg) translateY(-155px);
              -ms-transform: rotate(-25.913deg) translateY(-155px);
              -o-transform: rotate(-25.913deg) translateY(-155px);
              transform: rotate(-25.913deg) translateY(-155px);
            }
            cite span:nth-child(69n+3) {
              -webkit-transform: rotate(-20.696deg) translateY(-155px);
              -moz-transform: rotate(-20.696deg) translateY(-155px);
              -ms-transform: rotate(-20.696deg) translateY(-155px);
              -o-transform: rotate(-20.696deg) translateY(-155px);
              transform: rotate(-20.696deg) translateY(-155px);
            }
            cite span:nth-child(69n+4) {
              -webkit-transform: rotate(-14.957deg) translateY(-155px);
              -moz-transform: rotate(-14.957deg) translateY(-155px);
              -ms-transform: rotate(-14.957deg) translateY(-155px);
              -o-transform: rotate(-14.957deg) translateY(-155px);
              transform: rotate(-14.957deg) translateY(-155px);
            }
            cite span:nth-child(69n+5) {
              -webkit-transform: rotate(-8.696deg) translateY(-155px);
              -moz-transform: rotate(-8.696deg) translateY(-155px);
              -ms-transform: rotate(-8.696deg) translateY(-155px);
              -o-transform: rotate(-8.696deg) translateY(-155px);
              transform: rotate(-8.696deg) translateY(-155px);
            }
            cite span:nth-child(69n+6) {
              -webkit-transform: rotate(-2.435deg) translateY(-155px);
              -moz-transform: rotate(-2.435deg) translateY(-155px);
              -ms-transform: rotate(-2.435deg) translateY(-155px);
              -o-transform: rotate(-2.435deg) translateY(-155px);
              transform: rotate(-2.435deg) translateY(-155px);
            }
            cite span:nth-child(69n+7) {
              -webkit-transform: rotate(3.826deg) translateY(-155px);
              -moz-transform: rotate(3.826deg) translateY(-155px);
              -ms-transform: rotate(3.826deg) translateY(-155px);
              -o-transform: rotate(3.826deg) translateY(-155px);
              transform: rotate(3.826deg) translateY(-155px);
            }
            cite span:nth-child(69n+8) {
              -webkit-transform: rotate(10.087deg) translateY(-155px);
              -moz-transform: rotate(10.087deg) translateY(-155px);
              -ms-transform: rotate(10.087deg) translateY(-155px);
              -o-transform: rotate(10.087deg) translateY(-155px);
              transform: rotate(10.087deg) translateY(-155px);
            }
            cite span:nth-child(69n+9) {
              -webkit-transform: rotate(15.304deg) translateY(-155px);
              -moz-transform: rotate(15.304deg) translateY(-155px);
              -ms-transform: rotate(15.304deg) translateY(-155px);
              -o-transform: rotate(15.304deg) translateY(-155px);
              transform: rotate(15.304deg) translateY(-155px);
            }
            cite span:nth-child(69n+10) {
              -webkit-transform: rotate(16.87deg) translateY(-155px);
              -moz-transform: rotate(16.87deg) translateY(-155px);
              -ms-transform: rotate(16.87deg) translateY(-155px);
              -o-transform: rotate(16.87deg) translateY(-155px);
              transform: rotate(16.87deg) translateY(-155px);
            }
            cite span:nth-child(69n+11) {
              -webkit-transform: rotate(23.652deg) translateY(-155px);
              -moz-transform: rotate(23.652deg) translateY(-155px);
              -ms-transform: rotate(23.652deg) translateY(-155px);
              -o-transform: rotate(23.652deg) translateY(-155px);
              transform: rotate(23.652deg) translateY(-155px);
            }
            cite span:nth-child(69n+12) {
              -webkit-transform: rotate(31.478deg) translateY(-155px);
              -moz-transform: rotate(31.478deg) translateY(-155px);
              -ms-transform: rotate(31.478deg) translateY(-155px);
              -o-transform: rotate(31.478deg) translateY(-155px);
              transform: rotate(31.478deg) translateY(-155px);
            }
            cite span:nth-child(69n+13) {
              -webkit-transform: rotate(37.739deg) translateY(-155px);
              -moz-transform: rotate(37.739deg) translateY(-155px);
              -ms-transform: rotate(37.739deg) translateY(-155px);
              -o-transform: rotate(37.739deg) translateY(-155px);
              transform: rotate(37.739deg) translateY(-155px);
            }
            cite span:nth-child(69n+14) {
              -webkit-transform: rotate(42.957deg) translateY(-155px);
              -moz-transform: rotate(42.957deg) translateY(-155px);
              -ms-transform: rotate(42.957deg) translateY(-155px);
              -o-transform: rotate(42.957deg) translateY(-155px);
              transform: rotate(42.957deg) translateY(-155px);
            }
            cite span:nth-child(69n+15) {
              -webkit-transform: rotate(44.522deg) translateY(-155px);
              -moz-transform: rotate(44.522deg) translateY(-155px);
              -ms-transform: rotate(44.522deg) translateY(-155px);
              -o-transform: rotate(44.522deg) translateY(-155px);
              transform: rotate(44.522deg) translateY(-155px);
            }
            cite span:nth-child(69n+16) {
              -webkit-transform: rotate(50.783deg) translateY(-155px);
              -moz-transform: rotate(50.783deg) translateY(-155px);
              -ms-transform: rotate(50.783deg) translateY(-155px);
              -o-transform: rotate(50.783deg) translateY(-155px);
              transform: rotate(50.783deg) translateY(-155px);
            }
            cite span:nth-child(69n+17) {
              -webkit-transform: rotate(53.913deg) translateY(-155px);
              -moz-transform: rotate(53.913deg) translateY(-155px);
              -ms-transform: rotate(53.913deg) translateY(-155px);
              -o-transform: rotate(53.913deg) translateY(-155px);
              transform: rotate(53.913deg) translateY(-155px);
            }
            cite span:nth-child(69n+18) {
              -webkit-transform: rotate(58.087deg) translateY(-155px);
              -moz-transform: rotate(58.087deg) translateY(-155px);
              -ms-transform: rotate(58.087deg) translateY(-155px);
              -o-transform: rotate(58.087deg) translateY(-155px);
              transform: rotate(58.087deg) translateY(-155px);
            }
            cite span:nth-child(69n+19) {
              -webkit-transform: rotate(59.652deg) translateY(-155px);
              -moz-transform: rotate(59.652deg) translateY(-155px);
              -ms-transform: rotate(59.652deg) translateY(-155px);
              -o-transform: rotate(59.652deg) translateY(-155px);
              transform: rotate(59.652deg) translateY(-155px);
            }
            cite span:nth-child(69n+20) {
              -webkit-transform: rotate(65.913deg) translateY(-155px);
              -moz-transform: rotate(65.913deg) translateY(-155px);
              -ms-transform: rotate(65.913deg) translateY(-155px);
              -o-transform: rotate(65.913deg) translateY(-155px);
              transform: rotate(65.913deg) translateY(-155px);
            }
            cite span:nth-child(69n+21) {
              -webkit-transform: rotate(72.174deg) translateY(-155px);
              -moz-transform: rotate(72.174deg) translateY(-155px);
              -ms-transform: rotate(72.174deg) translateY(-155px);
              -o-transform: rotate(72.174deg) translateY(-155px);
              transform: rotate(72.174deg) translateY(-155px);
            }
            cite span:nth-child(69n+22) {
              -webkit-transform: rotate(73.739deg) translateY(-155px);
              -moz-transform: rotate(73.739deg) translateY(-155px);
              -ms-transform: rotate(73.739deg) translateY(-155px);
              -o-transform: rotate(73.739deg) translateY(-155px);
              transform: rotate(73.739deg) translateY(-155px);
            }
            cite span:nth-child(69n+23) {
              -webkit-transform: rotate(80.522deg) translateY(-155px);
              -moz-transform: rotate(80.522deg) translateY(-155px);
              -ms-transform: rotate(80.522deg) translateY(-155px);
              -o-transform: rotate(80.522deg) translateY(-155px);
              transform: rotate(80.522deg) translateY(-155px);
            }
            cite span:nth-child(69n+24) {
              -webkit-transform: rotate(88.348deg) translateY(-155px);
              -moz-transform: rotate(88.348deg) translateY(-155px);
              -ms-transform: rotate(88.348deg) translateY(-155px);
              -o-transform: rotate(88.348deg) translateY(-155px);
              transform: rotate(88.348deg) translateY(-155px);
            }
            cite span:nth-child(69n+25) {
              -webkit-transform: rotate(94.609deg) translateY(-155px);
              -moz-transform: rotate(94.609deg) translateY(-155px);
              -ms-transform: rotate(94.609deg) translateY(-155px);
              -o-transform: rotate(94.609deg) translateY(-155px);
              transform: rotate(94.609deg) translateY(-155px);
            }
            cite span:nth-child(69n+26) {
              -webkit-transform: rotate(100.87deg) translateY(-155px);
              -moz-transform: rotate(100.87deg) translateY(-155px);
              -ms-transform: rotate(100.87deg) translateY(-155px);
              -o-transform: rotate(100.87deg) translateY(-155px);
              transform: rotate(100.87deg) translateY(-155px);
            }
            cite span:nth-child(69n+27) {
              -webkit-transform: rotate(102.435deg) translateY(-155px);
              -moz-transform: rotate(102.435deg) translateY(-155px);
              -ms-transform: rotate(102.435deg) translateY(-155px);
              -o-transform: rotate(102.435deg) translateY(-155px);
              transform: rotate(102.435deg) translateY(-155px);
            }
            cite span:nth-child(69n+28) {
              -webkit-transform: rotate(108.696deg) translateY(-155px);
              -moz-transform: rotate(108.696deg) translateY(-155px);
              -ms-transform: rotate(108.696deg) translateY(-155px);
              -o-transform: rotate(108.696deg) translateY(-155px);
              transform: rotate(108.696deg) translateY(-155px);
            }
            cite span:nth-child(69n+29) {
              -webkit-transform: rotate(111.826deg) translateY(-155px);
              -moz-transform: rotate(111.826deg) translateY(-155px);
              -ms-transform: rotate(111.826deg) translateY(-155px);
              -o-transform: rotate(111.826deg) translateY(-155px);
              transform: rotate(111.826deg) translateY(-155px);
            }
            cite span:nth-child(69n+30) {
              -webkit-transform: rotate(116deg) translateY(-155px);
              -moz-transform: rotate(116deg) translateY(-155px);
              -ms-transform: rotate(116deg) translateY(-155px);
              -o-transform: rotate(116deg) translateY(-155px);
              transform: rotate(116deg) translateY(-155px);
            }
            cite span:nth-child(69n+31) {
              -webkit-transform: rotate(117.565deg) translateY(-155px);
              -moz-transform: rotate(117.565deg) translateY(-155px);
              -ms-transform: rotate(117.565deg) translateY(-155px);
              -o-transform: rotate(117.565deg) translateY(-155px);
              transform: rotate(117.565deg) translateY(-155px);
            }
            cite span:nth-child(69n+32) {
              -webkit-transform: rotate(123.826deg) translateY(-155px);
              -moz-transform: rotate(123.826deg) translateY(-155px);
              -ms-transform: rotate(123.826deg) translateY(-155px);
              -o-transform: rotate(123.826deg) translateY(-155px);
              transform: rotate(123.826deg) translateY(-155px);
            }
            cite span:nth-child(69n+33) {
              -webkit-transform: rotate(130.087deg) translateY(-155px);
              -moz-transform: rotate(130.087deg) translateY(-155px);
              -ms-transform: rotate(130.087deg) translateY(-155px);
              -o-transform: rotate(130.087deg) translateY(-155px);
              transform: rotate(130.087deg) translateY(-155px);
            }
            cite span:nth-child(69n+34) {
              -webkit-transform: rotate(136.348deg) translateY(-155px);
              -moz-transform: rotate(136.348deg) translateY(-155px);
              -ms-transform: rotate(136.348deg) translateY(-155px);
              -o-transform: rotate(136.348deg) translateY(-155px);
              transform: rotate(136.348deg) translateY(-155px);
            }
            cite span:nth-child(69n+35) {
              -webkit-transform: rotate(142.609deg) translateY(-155px);
              -moz-transform: rotate(142.609deg) translateY(-155px);
              -ms-transform: rotate(142.609deg) translateY(-155px);
              -o-transform: rotate(142.609deg) translateY(-155px);
              transform: rotate(142.609deg) translateY(-155px);
            }
            cite span:nth-child(69n+36) {
              -webkit-transform: rotate(148.87deg) translateY(-155px);
              -moz-transform: rotate(148.87deg) translateY(-155px);
              -ms-transform: rotate(148.87deg) translateY(-155px);
              -o-transform: rotate(148.87deg) translateY(-155px);
              transform: rotate(148.87deg) translateY(-155px);
            }
            cite span:nth-child(69n+37) {
              -webkit-transform: rotate(155.13deg) translateY(-155px);
              -moz-transform: rotate(155.13deg) translateY(-155px);
              -ms-transform: rotate(155.13deg) translateY(-155px);
              -o-transform: rotate(155.13deg) translateY(-155px);
              transform: rotate(155.13deg) translateY(-155px);
            }
            cite span:nth-child(69n+38) {
              -webkit-transform: rotate(161.391deg) translateY(-155px);
              -moz-transform: rotate(161.391deg) translateY(-155px);
              -ms-transform: rotate(161.391deg) translateY(-155px);
              -o-transform: rotate(161.391deg) translateY(-155px);
              transform: rotate(161.391deg) translateY(-155px);	
            }
            cite span:nth-child(69n+39) {
              -webkit-transform: rotate(162.957deg) translateY(-155px);
              -moz-transform: rotate(162.957deg) translateY(-155px);
              -ms-transform: rotate(162.957deg) translateY(-155px);
              -o-transform: rotate(162.957deg) translateY(-155px);
              transform: rotate(162.957deg) translateY(-155px);
            }
            cite span:nth-child(69n+40) {
              -webkit-transform: rotate(169.217deg) translateY(-155px);
              -moz-transform: rotate(169.217deg) translateY(-155px);
              -ms-transform: rotate(169.217deg) translateY(-155px);
              -o-transform: rotate(169.217deg) translateY(-155px);
              transform: rotate(169.217deg) translateY(-155px);
            }
            cite span:nth-child(69n+41) {
              -webkit-transform: rotate(170.783deg) translateY(-155px);
              -moz-transform: rotate(170.783deg) translateY(-155px);
              -ms-transform: rotate(170.783deg) translateY(-155px);
              -o-transform: rotate(170.783deg) translateY(-155px);
              transform: rotate(170.783deg) translateY(-155px);
            }
            cite span:nth-child(69n+42) {
              -webkit-transform: rotate(177.565deg) translateY(-155px);
              -moz-transform: rotate(177.565deg) translateY(-155px);
              -ms-transform: rotate(177.565deg) translateY(-155px);
              -o-transform: rotate(177.565deg) translateY(-155px);
              transform: rotate(177.565deg) translateY(-155px);
            }
            cite span:nth-child(69n+43) {
              -webkit-transform: rotate(185.391deg) translateY(-155px);
              -moz-transform: rotate(185.391deg) translateY(-155px);
              -ms-transform: rotate(185.391deg) translateY(-155px);
              -o-transform: rotate(185.391deg) translateY(-155px);
              transform: rotate(185.391deg) translateY(-155px);
            }
            cite span:nth-child(69n+44) {
              -webkit-transform: rotate(191.652deg) translateY(-155px);
              -moz-transform: rotate(191.652deg) translateY(-155px);
              -ms-transform: rotate(191.652deg) translateY(-155px);
              -o-transform: rotate(191.652deg) translateY(-155px);
              transform: rotate(191.652deg) translateY(-155px);
            }
            cite span:nth-child(69n+45) {
              -webkit-transform: rotate(193.217deg) translateY(-155px);
              -moz-transform: rotate(193.217deg) translateY(-155px);
              -ms-transform: rotate(193.217deg) translateY(-155px);
              -o-transform: rotate(193.217deg) translateY(-155px);
              transform: rotate(193.217deg) translateY(-155px);
            }
            cite span:nth-child(69n+46) {
              -webkit-transform: rotate(199.478deg) translateY(-155px);
              -moz-transform: rotate(199.478deg) translateY(-155px);
              -ms-transform: rotate(199.478deg) translateY(-155px);
              -o-transform: rotate(199.478deg) translateY(-155px);
              transform: rotate(199.478deg) translateY(-155px);
            }
            cite span:nth-child(69n+47) {
              -webkit-transform: rotate(205.739deg) translateY(-155px);
              -moz-transform: rotate(205.739deg) translateY(-155px);
              -ms-transform: rotate(205.739deg) translateY(-155px);
              -o-transform: rotate(205.739deg) translateY(-155px);
              transform: rotate(205.739deg) translateY(-155px);
            }
            cite span:nth-child(69n+48) {
              -webkit-transform: rotate(212.0deg) translateY(-155px);
              -moz-transform: rotate(212.0deg) translateY(-155px);
              -ms-transform: rotate(212.0deg) translateY(-155px);
              -o-transform: rotate(212.0deg) translateY(-155px);
              transform: rotate(212.0deg) translateY(-155px);
            }
            cite span:nth-child(69n+49) {
              -webkit-transform: rotate(213.565deg) translateY(-155px);
              -moz-transform: rotate(213.565deg) translateY(-155px);
              -ms-transform: rotate(213.565deg) translateY(-155px);
              -o-transform: rotate(213.565deg) translateY(-155px);
              transform: rotate(213.565deg) translateY(-155px);
            }
            cite span:nth-child(69n+50) {
              -webkit-transform: rotate(219.826deg) translateY(-155px);
              -moz-transform: rotate(219.826deg) translateY(-155px);
              -ms-transform: rotate(219.826deg) translateY(-155px);
              -o-transform: rotate(219.826deg) translateY(-155px);
              transform: rotate(219.826deg) translateY(-155px);
            }
            cite span:nth-child(69n+51) {
              -webkit-transform: rotate(225.043deg) translateY(-155px);
              -moz-transform: rotate(225.043deg) translateY(-155px);
              -ms-transform: rotate(225.043deg) translateY(-155px);
              -o-transform: rotate(225.043deg) translateY(-155px);
              transform: rotate(225.043deg) translateY(-155px);
            }
            cite span:nth-child(69n+52) {
              -webkit-transform: rotate(226.609deg) translateY(-155px);
              -moz-transform: rotate(226.609deg) translateY(-155px);
              -ms-transform: rotate(226.609deg) translateY(-155px);
              -o-transform: rotate(226.609deg) translateY(-155px);
              transform: rotate(226.609deg) translateY(-155px);
            }
            cite span:nth-child(69n+53) {
              -webkit-transform: rotate(232.87deg) translateY(-155px);
              -moz-transform: rotate(232.87deg) translateY(-155px);
              -ms-transform: rotate(232.87deg) translateY(-155px);
              -o-transform: rotate(232.87deg) translateY(-155px);
              transform: rotate(232.87deg) translateY(-155px);
            }
            cite span:nth-child(69n+54) {
              -webkit-transform: rotate(239.13deg) translateY(-155px);
              -moz-transform: rotate(239.13deg) translateY(-155px);
              -ms-transform: rotate(239.13deg) translateY(-155px);
              -o-transform: rotate(239.13deg) translateY(-155px);
              transform: rotate(239.13deg) translateY(-155px);
            }
            cite span:nth-child(69n+55) {
              -webkit-transform: rotate(245.391deg) translateY(-155px);
              -moz-transform: rotate(245.391deg) translateY(-155px);
              -ms-transform: rotate(245.391deg) translateY(-155px);
              -o-transform: rotate(245.391deg) translateY(-155px);
              transform: rotate(245.391deg) translateY(-155px);
            }
            cite span:nth-child(69n+56) {
              -webkit-transform: rotate(251.652deg) translateY(-155px);
              -moz-transform: rotate(251.652deg) translateY(-155px);
              -ms-transform: rotate(251.652deg) translateY(-155px);
              -o-transform: rotate(251.652deg) translateY(-155px);
              transform: rotate(251.652deg) translateY(-155px);
            }
            cite span:nth-child(69n+57) {
              -webkit-transform: rotate(257.913deg) translateY(-155px);
              -moz-transform: rotate(257.913deg) translateY(-155px);
              -ms-transform: rotate(257.913deg) translateY(-155px);
              -o-transform: rotate(257.913deg) translateY(-155px);
              transform: rotate(257.913deg) translateY(-155px);
            }
            cite span:nth-child(69n+58) {
              -webkit-transform: rotate(259.478deg) translateY(-155px);
              -moz-transform: rotate(259.478deg) translateY(-155px);
              -ms-transform: rotate(259.478deg) translateY(-155px);
              -o-transform: rotate(259.478deg) translateY(-155px);
              transform: rotate(259.478deg) translateY(-155px);
            }
            cite span:nth-child(69n+59) {
              -webkit-transform: rotate(265.739deg) translateY(-155px);
              -moz-transform: rotate(265.739deg) translateY(-155px);
              -ms-transform: rotate(265.739deg) translateY(-155px);
              -o-transform: rotate(265.739deg) translateY(-155px);
              transform: rotate(265.739deg) translateY(-155px);
            }
            cite span:nth-child(69n+60) {
              -webkit-transform: rotate(272.0deg) translateY(-155px);
              -moz-transform: rotate(272.0deg) translateY(-155px);
              -ms-transform: rotate(272.0deg) translateY(-155px);
              -o-transform: rotate(272.0deg) translateY(-155px);
              transform: rotate(272.0deg) translateY(-155px);
            }
            cite span:nth-child(69n+61) {
              -webkit-transform: rotate(278.261deg) translateY(-155px);
              -moz-transform: rotate(278.261deg) translateY(-155px);
              -ms-transform: rotate(278.261deg) translateY(-155px);
              -o-transform: rotate(278.261deg) translateY(-155px);
              transform: rotate(278.261deg) translateY(-155px);
            }
            cite span:nth-child(69n+62) {
              -webkit-transform: rotate(284.522deg) translateY(-155px);
              -moz-transform: rotate(284.522deg) translateY(-155px);
              -ms-transform: rotate(284.522deg) translateY(-155px);
              -o-transform: rotate(284.522deg) translateY(-155px);
              transform: rotate(284.522deg) translateY(-155px);
            }
            cite span:nth-child(69n+63) {
              -webkit-transform: rotate(290.783deg) translateY(-155px);
              -moz-transform: rotate(290.783deg) translateY(-155px);
              -ms-transform: rotate(290.783deg) translateY(-155px);
              -o-transform: rotate(290.783deg) translateY(-155px);
              transform: rotate(290.783deg) translateY(-155px);
            }
            cite span:nth-child(69n+64) {
              -webkit-transform: rotate(297.565deg) translateY(-155px);
              -moz-transform: rotate(297.565deg) translateY(-155px);
              -ms-transform: rotate(297.565deg) translateY(-155px);
              -o-transform: rotate(297.565deg) translateY(-155px);
              transform: rotate(297.565deg) translateY(-155px);
            }
            cite span:nth-child(69n+65) {
              -webkit-transform: rotate(305.391deg) translateY(-155px);
              -moz-transform: rotate(305.391deg) translateY(-155px);
              -ms-transform: rotate(305.391deg) translateY(-155px);
              -o-transform: rotate(305.391deg) translateY(-155px);
              transform: rotate(305.391deg) translateY(-155px);
            }
            cite span:nth-child(69n+66) {
              -webkit-transform: rotate(310.609deg) translateY(-155px);
              -moz-transform: rotate(310.609deg) translateY(-155px);
              -ms-transform: rotate(310.609deg) translateY(-155px);
              -o-transform: rotate(310.609deg) translateY(-155px);
              transform: rotate(310.609deg) translateY(-155px);
            }
            cite span:nth-child(69n+67) {
              -webkit-transform: rotate(316.348deg) translateY(-155px);
              -moz-transform: rotate(316.348deg) translateY(-155px);
              -ms-transform: rotate(316.348deg) translateY(-155px);
              -o-transform: rotate(316.348deg) translateY(-155px);
              transform: rotate(316.348deg) translateY(-155px);
            }
            cite span:nth-child(69n+68) {
              -webkit-transform: rotate(322.609deg) translateY(-155px);
              -moz-transform: rotate(322.609deg) translateY(-155px);
              -ms-transform: rotate(322.609deg) translateY(-155px);
              -o-transform: rotate(322.609deg) translateY(-155px);
              transform: rotate(322.609deg) translateY(-155px);
            }

            #laughing-man {
              width: 0;
              height: 0;
            }
            </style>
            <div id='laughing-man'>
              <div class='outer'>
                <div class='inner'>
                  <div class='eye left'>
                    <div class='mask'></div>
                  </div>
                  <div class='eye right'>
                    <div class='mask'></div>
                  </div>
                  <div class='smile-wrapper'>
                    <div class='smile'>
                      <div class='mask-wrapper'>
                        <div class='mask'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <cite>
                  <span>I</span>
                  <span>&nbsp;</span>
                  <span>t</span>
                  <span>h</span>
                  <span>o</span>
                  <span>u</span>
                  <span>g</span>
                  <span>h</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>w</span>
                  <span>h</span>
                  <span>a</span>
                  <span>t</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>'</span>
                  <span>d</span>
                  <span>&nbsp;</span>
                  <span>d</span>
                  <span>o</span>
                  <span>&nbsp;</span>
                  <span>w</span>
                  <span>a</span>
                  <span>s</span>
                  <span>,</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>'</span>
                  <span>d</span>
                  <span>&nbsp;</span>
                  <span>p</span>
                  <span>r</span>
                  <span>e</span>
                  <span>t</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                  <span>&nbsp;</span>
                  <span>I</span>
                  <span>&nbsp;</span>
                  <span>w</span>
                  <span>a</span>
                  <span>s</span>
                  <span>&nbsp;</span>
                  <span>o</span>
                  <span>n</span>
                  <span>e</span>
                  <span>&nbsp;</span>
                  <span>o</span>
                  <span>f</span>
                  <span>&nbsp;</span>
                  <span>t</span>
                  <span>h</span>
                  <span>o</span>
                  <span>s</span>
                  <span>e</span>
                  <span>&nbsp;</span>
                  <span>d</span>
                  <span>e</span>
                  <span>a</span>
                  <span>f</span>
                  <span>-</span>
                  <span>m</span>
                  <span>u</span>
                  <span>t</span>
                  <span>e</span>
                  <span>s</span>
                  <span>&nbsp;</span>
                </cite>
                <div class='hat'>
                  <div class='tip'></div>
                  <div class='edge'></div>
                  <div class='gap'></div>
                  <div class='rim'></div>
                </div>
              </div>
            </div>`;
        this._man = shadow.querySelector("#laughing-man");
    }

    static get observedAttributes() {
        return ["scale"];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this._man.style.transform = `scale(${this.getAttribute("scale")})`;
    }
}

customElements.define("laughing-man", LaughingMan);