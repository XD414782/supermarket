<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <Scroll>
      <div>nothing</div>
      <ul>as1</ul>
      <ul>as2</ul>
      <ul>as3</ul>
      <ul>as4</ul>
      <ul>as5</ul>
      <ul>as6</ul>
      <ul>as7</ul>
      <ul>as8</ul>
      <ul>as9</ul>
      <ul>as10</ul>
      <ul>as11</ul>
      <ul>as12</ul>
      <ul>as13</ul>
      <ul>as14</ul>
      <ul>as15</ul>
      <ul>as16</ul>
      <ul>as17</ul>
      <ul>as18</ul>
      <ul>as19</ul>
      <ul>as20</ul>
      <ul>as21</ul>
      <ul>as22</ul>
      <ul>as23</ul>
      <ul>as24</ul>
      <ul>as25</ul>
      <ul>as26</ul>
      <ul>as27</ul>
      <ul>as28</ul>
      <ul>as29</ul>
      <ul>as30</ul>
      <ul>as31</ul>
      <ul>as32</ul>
      <ul>as33</ul>
      <ul>as34</ul>
      <ul>as35</ul>
      <ul>as36</ul>
      <ul>as37</ul>
      <ul>as38</ul>
      <ul>as39</ul>
      <ul>as40</ul>
      <ul>as41</ul>
      <ul>as42</ul>
      <ul>as43</ul>
      <ul>as44</ul>
      <ul>as45</ul>
      <ul>as46</ul>
      <ul>as47</ul>
      <ul>as48</ul>
      <ul>as49</ul>
      <ul>as50</ul>
      <ul>as51</ul>
      <ul>as52</ul>
      <ul>as53</ul>
      <ul>as54</ul>
      <ul>as55</ul>
      <ul>as56</ul>
      <ul>as57</ul>
      <ul>as58</ul>
      <ul>as59</ul>
      <ul>as60</ul>
      <ul>as61</ul>
      <ul>as62</ul>
      <ul>as63</ul>
      <ul>as64</ul>
      <ul>as65</ul>
      <ul>as66</ul>
      <ul>as67</ul>
      <ul>as68</ul>
      <ul>as69</ul>
      <ul>as70</ul>
      <ul>as71</ul>
      <ul>as72</ul>
      <ul>as73</ul>
      <ul>as74</ul>
      <ul>as75</ul>
      <ul>as76</ul>
      <ul>as77</ul>
      <ul>as78</ul>
      <ul>as79</ul>
      <ul>as80</ul>
      <ul>as81</ul>
      <ul>as82</ul>
      <ul>as83</ul>
      <ul>as84</ul>
      <ul>as85</ul>
      <ul>as86</ul>
      <ul>as87</ul>
      <ul>as88</ul>
      <ul>as89</ul>
      <ul>as90</ul>
      <ul>as91</ul>
      <ul>as92</ul>
      <ul>as93</ul>
      <ul>as94</ul>
      <ul>as95</ul>
      <ul>as96</ul>
      <ul>as97</ul>
      <ul>as98</ul>
      <ul>as99</ul>
      <ul>as100</ul>
    </Scroll>
  </div>
</template>
<script>
import DetailNavBar from '@/views/detail/childCompos/DetailNavBar.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'

export default {
  name:"Detail",
  data(){
    return{
      index:0,
    }
  },
  components:{
    DetailNavBar,
    Scroll
  },
  created(){
    this.index=this.$route.query.index
  },
}
</script>
<style scoped>
#detail{
  margin-top: 44px;
  height: calc(100vh - 44px);
  background-color: red;
  position: relative;
  z-index: 12;
}
</style>