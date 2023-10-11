import { Metadata } from "next";
import TitleWithUnderline from "../_components/atoms/TitleWithUnderline";
import { createMetaTitle } from "@/lib/meta";

export const metadata: Metadata = {
  title: createMetaTitle("About"),
};

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start text-justify mb-5">
        <TitleWithUnderline title="Privacy Policy" />
        <div className="my-4">
          shinryuzz&apos;s blog
          &nbsp;（以下「当サイト」）のプライバシーポリシー・免責事項を次の通り記載します。
        </div>
        <div className="w-full flex flex-col items-start gap-4 my-6">
          <h1 className="text-lg md:text-xl font-bold">Cookieの使用について</h1>
          <div>
            当サイトでは、広告配信やアクセス解析のためにCookieを使用しています
            Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。
            Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-4 my-6">
          <h1 className="text-lg md:text-xl font-bold">
            アクセス解析サービスについて
          </h1>
          <div>
            当サイトでは、Googleアナリティクスによりアクセス情報を解析しています。
            アクセス情報の解析にはCookieを使用しています。また、アクセス情報の収集はCookieを無効にすることで拒否できます。
            Google社のデータ収集・処理の仕組みについては、
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
              target="_blank"
              className="text-cyan-800"
            >
              こちら
            </a>{" "}
            をご覧ください。
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-4 my-6">
          <h1 className="text-lg md:text-xl font-bold">免責事項について</h1>
          <div>
            当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。
            各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
            また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-4 my-6">
          <h1 className="text-lg md:text-xl font-bold">著作権</h1>
          <div>
            当サイトに掲載されている文章・画像の著作権は、運営者に帰属しています。
            法的に認められている引用の範囲を超えて、無断で転載することを禁止します。
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-4 my-6">
          <h1 className="text-lg md:text-xl font-bold">
            プライバシーポリシーの変更
          </h1>
          <div>
            当サイトは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。
            本プライバシーポリシーは、事前の予告なく変更することがあります。
            本プライバシーポリシーの変更は、当サイトに掲載された時点で有効になるものとします。
          </div>
        </div>

        <div>2023年8月25日 制定</div>
        <div>shinryuzz</div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
