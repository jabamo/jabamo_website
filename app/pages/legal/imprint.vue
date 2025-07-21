<template>
  <div class="max-w-4xl mx-auto px-6 py-20">
    <div class="text-center mb-10">
      <h1 class="font-title text-4xl lg:text-5xl font-bold mb-6">
        Impressum
      </h1>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
      
      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Impressum
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p class="mb-4">
            Informationspflicht laut §5 E-Commerce Gesetz und Offenlegungspflicht laut §25 Mediengesetz
          </p>
          <p class="mb-4">
            Jona-David Bastian<br>
            Pfingstbornstraße 28<br>
            35794 Mengerskirchen<br>
            Deutschland
          </p>
          <p class="mb-4">
            Tel: +49 6476-9154914<br>
            E-Mail:
            <svg
              :width="useEmail().emailSvg.width"
              :height="useEmail().emailSvg.height"
              class="inline-block align-middle ml-1"
          >
            <text
                v-for="(char, index) in useEmail().emailSvg.chars"
                :key="index"
                :x="useEmail().emailSvg.positions[index]"
                y="15"
                :font-size="useEmail().emailSvg.fontSize"
                :font-family="useEmail().emailSvg.fontFamily"
                :class="useEmail().emailSvg.className"
            >
              {{ char }}
            </text>
          </svg>
          </p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Copyright & Urheberrechtshinweis
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p class="mb-4">
            Alle Inhalte dieser Webpräsenz, insbesondere Texte, Fotografien und Grafiken, sind urheberrechtlich geschützt und teilweise lizensiert. Das Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet, bei der im Impressum angeführten natürlichen bzw. juristischen Person. Bitte fragen Sie uns, falls Sie die Inhalte dieses Internetangebotes in irgendeiner Art und Weise verwenden möchten.
          </p>
          <p class="mb-4">
            Unter der „Creative Commons"-Lizenz" veröffentlichte Inhalte, sind als solche gekennzeichnet. Sie dürfen entsprechend den angegebenen Lizenzbedingungen verwendet werden.
          </p>
          <p class="mb-4">
            Wer gegen das Urheberrecht verstößt (z.B. Bilder oder Texte unerlaubt kopiert), macht sich unter Umständen gem. UrhG strafbar.
          </p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Haftungsausschluss für ausgehende Links
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p class="mb-4">
            Diese Webpräsenz enthält, so wie viele andere Webseiten ebenfalls, so genannte Links auf andere, fremde Webpräsenzen und Inhalte. Das wird als Urgedanke des Internets und des weltweiten Informationsaustauschs als gang und gäbe angesehen. Rechtlich und technisch gesehen haben wir als Betreiber unserer Webseite keinen Einfluss auf die Gestaltung sowie den Inhalt der verlinkten Webpräsenzen. Aus diesem Grund können wir zu keinem Zeitpunkt für diese Webpräsenzen in irgendeiner Art und Weise Haftung oder Gewähr übernehmen, da diese im Verantwortungsbereich des jeweiligen Betreibers angesiedelt ist.
          </p>
          <p class="mb-4">
            Zum Zeitpunkt der Verlinkung wurden die fremden Inhalte auf Funktionalität, rechtswidrige Inhalte sowie uns möglich auf Schadsoftware überprüft. Als Indiz finden Sie bei einigen Links einen Datumsstempel der auf den Zeitpunkt der gesetzten Verlinkung hinweist. Nichts desto trotz sind wir bemüht unsere Besucher vor rechtswidrigen Inhalten und Schadsoftware zu schützen weshalb wir stichprobenartig die gesetzten Links in wiederkehrenden Intervallen untersuchen. Bei etwaigen Rechtsverletzungen werden die gesetzten Links selbstverständlich umgehend entfernt.
          </p>
          <p class="mb-4">
            Sollten Sie einen derartigen Link vor unserer Überprüfung gefunden haben, so bitten wir um umgehende Benachrichtigung an die im Impressum angezeigten Kontaktdaten. Bitte übermitteln Sie uns dabei den Link unserer Webseite die den fragwürdigen Verweis enthält, sowie die Art der Kennzeichnung (a) rechtwidriger Inhalt, b) Schadsoftware oder c) inaktiver Inhalt bzw. Verweis).
          </p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="font-title text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Ihre Rechte
        </h2>
        <div class="font-content text-gray-700 dark:text-gray-300 leading-relaxed">
          <p class="mb-4">
            Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der oben genannten E-Mail-Adresse oder Ihrer Datenschutzbehörde beschweren.
          </p>
        </div>
      </section>
    </div>

    <div class="text-center mt-12">
      <NuxtLink 
        to="/"
        class="inline-flex items-center px-6 py-3 text-accent-500 hover:text-accent-600 font-medium transition-colors"
      >
        <Icon name="tabler:arrow-left" class="mr-2" size="20" />
        Zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
// SEO Meta Tags
useHead({
  title: 'Impressum - Jona-David Bastian',
  meta: [
    { name: 'description', content: 'Impressum und Kontaktdaten von Jona-David Bastian - Fullstack Developer aus Mengerskirchen.' },
    { name: 'robots', content: 'noindex, nofollow' } // don't index
  ]
})
</script>