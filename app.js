Vue.createApp({
    data() {
      return {
        perspectiveSize: 150,
        rotateXSize: 0,
        rotateYSize: 0,
        rotateZSize: 0,
      }
    },
    methods:{
        reset(){
            this.perspectiveSize= 150;
            this.rotateXSize= 0;
            this.rotateYSize= 0;
            this.rotateZSize= 0;
        },
        copy(){

            const copyValue = `
                .box {
                    transform: perspective(${this.perspectiveSize}px) rotateX(${this.rotateXSize}deg) rotateY(${this.rotateYSize}deg) rotateZ(${this.rotateZSize}deg) ;
                }
            `;

            navigator.clipboard.writeText(copyValue);

            // Alert the copied text
            alert("Copied the property: " + copyValue);
        }
    },
    computed:{
        getPerspectiveStyle(){
            return {
                transform: `perspective(${this.perspectiveSize}px) rotateX(${this.rotateXSize}deg) rotateY(${this.rotateYSize}deg) rotateZ(${this.rotateZSize}deg) `,
            }
        },
    }
  }).mount('#app')