<script>
  // @ts-nocheck

  import content from "./assets/content.json";

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop - 50,
      behavior: "smooth",
    });
  }
</script>

<main>
  <div class="bg-white">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 px-8"
        aria-label="Global"
      >
        <div class="flex-1">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </div>
        <div class="flex gap-12">
          {#each content.header.links as headerItem}
            {#if headerItem.sectionLink === "pricing" && !content.pricing.showPricingSection}
              <p />
            {:else}
              <a
                href="#{headerItem.sectionLink}"
                class="text-sm font-semibold leading-6 text-gray-900"
                on:click={handleAnchorClick}>{headerItem.text}</a
              >
            {/if}
          {/each}
        </div>
        <div class="flex flex-1 justify-end">
          <a
            href="#c"
            class="text-sm px-10 py-4 font-semibold leading-6 rounded-md hover:shadow-sm text-gray-900 hover:bg-slate-100"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
    </header>

    <main class="isolate">
      <!-- Hero section -->
      <div id="#anchor-home" class="relative pt-14">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          />
        </div>
        <div class="py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1
                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                {content.hero.title}
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                {content.hero.subtitle}
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#sign-up"
                  on:click={handleAnchorClick}
                  class="rounded-md bg-indigo-600 px-10 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >Sign up</a
                >
                <a
                  href="#faq"
                  on:click={handleAnchorClick}
                  class="text-sm px-10 py-4 font-semibold leading-6 rounded-md hover:shadow-sm text-gray-900 hover:bg-slate-100"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </div>
            </div>
            <div class="mt-16 flow-root sm:mt-24">
              <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
              >
                <img
                  src="/{content.hero.image}"
                  alt="App screenshot"
                  width="2432"
                  height="1442"
                  class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          />
        </div>
      </div>

      <!-- Feature section -->
      <div id="features" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">
            {content.features.pretitle}
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {content.features.title}
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {content.features.subtitle}
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
          >
            {#each content.features.features as feature}
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                  >
                    <!--TODO Add icon somehow -->
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  {feature.title}
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            {/each}
          </dl>
        </div>
      </div>

      <!-- Feature section -->
      <div class="mt-32 sm:mt-56">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
              {content.solution.pretitle}
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {content.solution.title}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {content.solution.subtitle}
            </p>
          </div>
        </div>
        <div class="relative overflow-hidden pt-16">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              src="/{content.solution.image}"
              alt="App screenshot"
              class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width="2432"
              height="1442"
            />
            <div class="relative" aria-hidden="true">
              <div
                class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"
              />
            </div>
          </div>
        </div>
        <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
          >
            {#each content.solution.features as feature}
              <div class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <!--TODO Add icon somehow -->
                  <svg
                    class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {feature.title}
                </dt>
                <dd class="inline">
                  {feature.description}
                </dd>
              </div>
            {/each}
          </dl>
        </div>
      </div>

      <!-- Newsletter section -->
      <div
        id="sign-up"
        class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8"
      >
        <div
          class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
        >
          <h2
            class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {content.newsletter.title}
          </h2>
          <p
            class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300"
          >
            {content.newsletter.subtitle}
          </p>
          <form class="mx-auto mt-10 flex max-w-md gap-x-4">
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >{content.newsletter.buttonText}</button
            >
          </form>
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <!-- Testimonials section -->
      <div class="relative isolate mt-32 sm:mt-56 sm:pt-32">
        <svg
          class="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width="200"
              height="200"
              x="50%"
              y="0"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="0" class="overflow-visible fill-gray-50">
            <path
              d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          />
        </svg>
        <div class="relative">
          <div
            class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true"
          >
            <div
              class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            />
          </div>
          <div
            class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
            aria-hidden="true"
          >
            <div
              class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            />
          </div>
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-xl sm:text-center">
              <h2
                class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
              >
                {content.testimonials.pretitle}
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                {content.testimonials.title}
              </p>
            </div>
            <div
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
            >
              <figure
                class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
              >
                <blockquote
                  class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900"
                >
                  <p>
                    {content.testimonials.testimonial0.quote}
                  </p>
                </blockquote>
                <figcaption
                  class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4"
                >
                  <img
                    class="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                    alt=""
                  />
                  <div class="flex-auto">
                    <div class="font-semibold">
                      {content.testimonials.testimonial0.name}
                    </div>
                    <div class="text-gray-600">
                      {content.testimonials.testimonial0.atName}
                    </div>
                  </div>
                  <!-- TODO add image -->
                  <img
                    class="h-10 w-auto flex-none"
                    src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                    alt=""
                  />
                </figcaption>
              </figure>
              <div class="space-y-8 xl:contents xl:space-y-0">
                <div class="space-y-8 xl:row-span-2">
                  <figure
                    class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                  >
                    <blockquote class="text-gray-900">
                      <p>
                        {content.testimonials.testimonial1.quote}
                      </p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                      <img
                        class="h-10 w-10 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <div class="font-semibold">
                          {content.testimonials.testimonial1.name}
                        </div>
                        <div class="text-gray-600">
                          {content.testimonials.testimonial1.atName}
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  <!-- More testimonials... -->
                </div>
                <div class="space-y-8 xl:row-start-1">
                  <figure
                    class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                  >
                    <blockquote class="text-gray-900">
                      <p>
                        {content.testimonials.testimonial2.quote}
                      </p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                      <img
                        class="h-10 w-10 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <div class="font-semibold">
                          {content.testimonials.testimonial2.name}
                        </div>
                        <div class="text-gray-600">
                          {content.testimonials.testimonial2.atName}
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  <!-- More testimonials... -->
                </div>
              </div>
              <div class="space-y-8 xl:contents xl:space-y-0">
                <div class="space-y-8 xl:row-start-1">
                  <figure
                    class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                  >
                    <blockquote class="text-gray-900">
                      <p>
                        {content.testimonials.testimonial3.quote}
                      </p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                      <img
                        class="h-10 w-10 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <div class="font-semibold">
                          {content.testimonials.testimonial3.name}
                        </div>
                        <div class="text-gray-600">
                          {content.testimonials.testimonial3.atName}
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  <!-- More testimonials... -->
                </div>
                <div class="space-y-8 xl:row-span-2">
                  <figure
                    class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                  >
                    <blockquote class="text-gray-900">
                      <p>
                        {content.testimonials.testimonial4.quote}”
                      </p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                      <img
                        class="h-10 w-10 rounded-full bg-gray-50"
                        src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <div class="font-semibold">
                          {content.testimonials.testimonial4.name}
                        </div>
                        <div class="text-gray-600">
                          {content.testimonials.testimonial4.atName}
                        </div>
                      </div>
                    </figcaption>
                  </figure>

                  <!-- More testimonials... -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing section -->
      {#if content.pricing.showPricingSection}
        <div id="pricing" class="py-24 sm:pt-48">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
              <h2 class="text-base font-semibold leading-7 text-indigo-600">
                {content.pricing.pretitle}
              </h2>
              <p
                class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
              >
                {content.pricing.title}
              </p>
            </div>
            <p
              class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
            >
              {content.pricing.subtitle}
            </p>
            <div
              class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div
                class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8 lg:rounded-r-none"
              >
                <div>
                  <div class="flex items-center justify-between gap-x-4">
                    <h3
                      id="tier-freelancer"
                      class="text-lg font-semibold leading-8 text-gray-900"
                    >
                      {content.pricing.basic.name}
                    </h3>
                  </div>
                  <p class="mt-4 text-sm leading-6 text-gray-600">
                    {content.pricing.basic.description}
                  </p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span
                      class="text-4xl font-bold tracking-tight text-gray-900"
                      >{content.pricing.basic.price}</span
                    >
                    <span class="text-sm font-semibold leading-6 text-gray-600">
                      {content.pricing.basic.period}</span
                    >
                  </p>
                  <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {#each content.pricing.basic.features as feature}
                      <li class="flex gap-x-3">
                        <svg
                          class="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    {/each}
                  </ul>
                </div>
                <a
                  href="#c"
                  aria-describedby="tier-freelancer"
                  class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                  >Buy plan</a
                >
              </div>
              <div
                class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none"
              >
                <div>
                  <div class="flex items-center justify-between gap-x-4">
                    <h3
                      id="tier-startup"
                      class="text-lg font-semibold leading-8 text-indigo-600"
                    >
                      {content.pricing.pro.name}
                    </h3>
                    <p
                      class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600"
                    >
                      Most popular
                    </p>
                  </div>
                  <p class="mt-4 text-sm leading-6 text-gray-600">
                    {content.pricing.pro.description}
                  </p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span
                      class="text-4xl font-bold tracking-tight text-gray-900"
                      >{content.pricing.pro.price}</span
                    >
                    <span class="text-sm font-semibold leading-6 text-gray-600"
                      >{content.pricing.pro.period}</span
                    >
                  </p>
                  <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {#each content.pricing.pro.features as feature}
                      <li class="flex gap-x-3">
                        <svg
                          class="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    {/each}
                  </ul>
                </div>
                <a
                  href="#b"
                  aria-describedby="tier-startup"
                  class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                  >Buy plan</a
                >
              </div>
              <div
                class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8 lg:rounded-l-none"
              >
                <div>
                  <div class="flex items-center justify-between gap-x-4">
                    <h3
                      id="tier-enterprise"
                      class="text-lg font-semibold leading-8 text-gray-900"
                    >
                      {content.pricing.enterprise.name}
                    </h3>
                  </div>
                  <p class="mt-4 text-sm leading-6 text-gray-600">
                    {content.pricing.enterprise.description}
                  </p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span
                      class="text-4xl font-bold tracking-tight text-gray-900"
                      >{content.pricing.enterprise.price}</span
                    >
                    <span class="text-sm font-semibold leading-6 text-gray-600"
                      >{content.pricing.enterprise.period}</span
                    >
                  </p>
                  <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {#each content.pricing.enterprise.features as feature}
                      <li class="flex gap-x-3">
                        <svg
                          class="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    {/each}
                  </ul>
                </div>
                <a
                  href="#a"
                  aria-describedby="tier-enterprise"
                  class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                  >Buy plan</a
                >
              </div>
            </div>
          </div>
        </div>
      {/if}
      <!-- FAQs -->
      <div
        id="faq"
        class="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"
      >
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
          {#each content.faq.questions as faq}
            <div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt
                class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5"
              >
                {faq.question}
              </dt>
              <dd class="mt-4 lg:col-span-7 lg:mt-0">
                <p class="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          {/each}
        </dl>
      </div>

      <!-- CTA section -->
      <div class="relative -z-10 mt-32 px-6 lg:px-8">
        <div
          class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
          aria-hidden="true"
        >
          <div
            class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
            style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"
          />
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {content.endSalesPoint.title}
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {content.endSalesPoint.subtitle}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#sign-up"
              on:click={handleAnchorClick}
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Sign Up</a
            >
            <a
              href="#faq"
              class="text-sm font-semibold leading-6 text-gray-900 px-3.5 py-2.5 hover:bg-slate-100 rounded-md"
              on:click={handleAnchorClick}
              >Learn more <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
        <div
          class="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
          aria-hidden="true"
        >
          <div
            class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <div class="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        class="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
      >
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="flex gap-8">
          <div class="text-sm font-semibold leading-6 text-gray-900">
            {content.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  </div>
</main>
