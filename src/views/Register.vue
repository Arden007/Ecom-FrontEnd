<template>
 <div class="Register">
<div class="Contact">
    <div class="cont">
      <h4 class="cont-msg">Contact</h4>
      <h2 class="cont-head">I'd Love To Hear From You.</h2>
      <h4 class="cont-msg">feel free to get in touch</h4>
    </div>
    <form class="form animated bounceInLeft">
      <p class="p-tag" type="Name:">
        <input placeholder="Write your name here.." />
      </p>
      <p class="p-tag" type="Last name:">
        <input placeholder="Write your Last name here.." />
      </p>
      <p class="p-tag" type="Email:">
        <input placeholder="All infomation will be sent to your email" />
      </p>
      <p class="p-tag" type="Password">
        <input type="password" placeholder="Do not share your password with others.." />
      </p>
      <button>Register Now</button>
    </form>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.Register{
 line-height: 26px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  background: black;
  padding-bottom: 50px;
}

.cont {
  margin-top: 40px;
  margin-bottom: 20px;
}
.cont-head {
  font-size: 40px;
  font-weight: bolder;
  align-content: center;
  color: rgba(255, 0, 0, 0.678);
}
.cont-msg {
  font-size: 35px;
  color: white;
  margin: 10px 0 10px 0;
  font-weight: bold;
  align-content: center;
}

/* animation*/
.animated {
  animation-duration: 2s;
  animation-fill-mode: both;
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInLeft {
  animation-name: bounceInLeft;
}
/* animation*/

/* form style */
.form {
  background: rgba(128, 128, 128, 0.219);
  color: white;
  border-radius: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
  margin-right: 200px;
  margin-left: 200px;
}

input {
  width: 95%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
  color: white;
}
input:focus {
  border-bottom: 2px solid red;
}
.p-tag:before {
  content: attr(type);
  display: block;
  margin: 28px 10px 10px;
  font-size: 14px;
  color: white;
  text-align: left;
}
button {
  /* float: right; */
  padding: 8px 12px;
  margin: 8px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #78788c;
  border-radius: 30px;
  background: 0;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #eaeaec;
  color: rgba(224, 0, 0, 0.877);
}

span {
  margin: 15px 7px 0 30px;
}
/* form style */

@media (max-width: 800px) {
  .form {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>