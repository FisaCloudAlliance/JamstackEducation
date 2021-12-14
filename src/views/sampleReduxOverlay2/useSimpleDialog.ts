import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICard } from "../../store/card/model";
import { useSimpleDialogModel } from "./useSimpleDialogModel";
import { updateCards } from "../../store/card/action";

/**
 * simpleDialog.tsx の振る舞いをカプセル化して定義する
 * @returns
 */
export function useSimpleDialog() {
  /**
   * useState は react の 組み込みのフックで、関数型のアプローチで状態を保持し、
   * 変更があれば、バインドしているコンポーネントへ自動で通知する機能を持ちます
   *
   * redux との違い
   * useState ・・・ 基本的に1画面、1コンポーネントに閉じているため、宣言の度にインスタンスが変わる
   * redux ・・・　どこで宣言しても、同じインスタンスなので、異なるコンポーネント間で状態更新が可能
   */
  const [open, setOpen] = useState(false);

  /** Simpleダイアログで利用するデータをカスタムHooksへ切り出しています */
  const model = useSimpleDialogModel();

  /** show 関数をココで宣言し、上記で保持している状態に対して値をセットします */
  const show = () => setOpen(true);

  /** close 関数をココで宣言し、上記で保持している状態に値をセットします */
  const close = () => {
    model.title.onChange("");
    model.description.onChange("");
    model.allState.clear();
    setOpen(false);
  };

  /** redux への更新通知を行うカスタムHook */
  const dispatch = useDispatch();
  /** redux から特定のモデルを取り出す */
  const store = useSelector((x) => x.cards);

  /** ダイアログでOKが押下された際の振る舞いをここで宣言します。 */
  const okAction = () => {
    // modelが持つ全ての状態を検証し、問題があればこの関数を終了します
    if (!model.allState.validateToast()) return;

    const card: ICard = {
      title: model.title.state,
      description: model.description.state,
    };

    /** 
     * TypeScript のスプレッド構文を利用すると、配列のマージが楽になる
     * 詳細は https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
     * ↓の構文は、store.cardsという配列の一番後ろに card を追加している
     */
    const newCards = [...store.cards, card];

    /** 新しくできた store のデータを、投入して redux のストアを更新する */
    dispatch(updateCards({ cards: newCards }));

    /** ダイアログを閉じる */
    close();
  };

  /**
   * 関数型指向のmix-in の考え方で、関数の戻り値の段階で、クラスに相当する
   * 状態(プロパティ)や振る舞い(メソッド)をこの場で作って返す
   */
  return { open, model, show, close, okAction };
}
