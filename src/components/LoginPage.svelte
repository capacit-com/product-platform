<script>
  import { navigate } from "svelte-routing/";
  import content from "../assets/content.json";

  import * as amplitude from "@amplitude/analytics-browser";
  function handleReturnToLandingPage(event) {
    event.preventDefault();
    navigate(content.login.redirectUrl);
    amplitude.track("login-try");
  }
</script>

<div
  class="flex h-full flex-col justify-center items-center px-6 py-12 lg:px-8"
>
  <div
    class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    />
  </div>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img
      class="mx-auto h-10 w-auto"
      src={content.header.logo}
      alt="Your Company"
    />
    <h2
      class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
    >
      Sign in to your account
    </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
    <!-- <form class="space-y-6"> -->
    <div>
      <label
        for="email"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Email address</label
      >
      <div class="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          required
          class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label
          for="password"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Password</label
        >
      </div>
      <div class="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          required
          class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Sign in</button
      >
    </div>
    <!-- </form> -->

    <p class="mt-10 text-center text-sm text-gray-500">
      <a
        href="/"
        on:click={handleReturnToLandingPage}
        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >Return to landing page</a
      >
    </p>
  </div>
</div>
