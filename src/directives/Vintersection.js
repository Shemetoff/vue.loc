export default {
    mounted(el, binding) {
        console.log(el, binding);
        /**
         *Lazy load posts
         */
        //console.log(this.$refs.observer);
        const options = {

              rootMargin: '0px',
              threshold: 1.0
            }
        const callback = (entries) => {
          if(entries[0].isIntersecting) {
            binding.value();
            console.log('NEED TO LOAD');
          }
          /*console.log('NEED TO LOAD')
          console.log(entries)*/

        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
        /**
         *End Lazy load posts
         */
    },
    name: 'intersection'
}
