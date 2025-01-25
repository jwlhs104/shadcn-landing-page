const RefundPolicy = () => {
  return (
    <div
      className="policy"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>退款政策</h1>
      <p>歡迎您與我們的客服聯繫，以獲取更多資訊。</p>
      <h2 className="mt-4">一、7日無條件退款保障</h2>
      <ul>
        <li>消費者自完成購買的次日起享有 7 日無條件退款保障。</li>
        <li>
          若您對軟體服務授權不滿意或有任何問題，可於購買後 7
          日內聯繫我們申請退款。
        </li>
      </ul>

      <h2>二、退款流程</h2>
      <ol>
        <li>
          <strong>聯繫客服：</strong>
          請透過我們的客服信箱或線上客服提交退款申請，並提供以下資訊：
          <ul>
            <li>訂單編號</li>
            <li>軟體名稱</li>
            <li>聯絡方式</li>
          </ul>
        </li>
        <li>
          <strong>退款處理：</strong>確認符合退款條件後，我們將於 7
          個工作日內完成退款。
        </li>
      </ol>

      <h2>三、以下情況不適用於退款政策</h2>
      <ul>
        <li>客製化的軟體服務或特殊訂製的授權方案。</li>
        <li>其他明確註明不可退款的服務項目。</li>
      </ul>

      <h2>四、注意事項</h2>
      <ul>
        <li>為保障您的權益，請妥善保存交易證明（如發票或訂單記錄）。</li>
        <li>若因技術問題申請退款，請務必提供問題描述或截圖供我們檢查。</li>
        <li>
          本政策依據《消費者保護法》訂定，如有未盡事宜，將依法律規定辦理。
        </li>
      </ul>

      <p>
        我們期待能提供您最好的購物體驗，若有任何疑問，請隨時聯繫我們的
        <a href="mailto:johnny85215@gmail.com">客服團隊</a>。
      </p>
    </div>
  );
};

export default RefundPolicy;
