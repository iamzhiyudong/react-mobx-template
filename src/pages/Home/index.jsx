import React from "react";
import { observer, inject } from "mobx-react";
import { observable, makeObservable, runInAction } from "mobx";
import appStore from "@/models/app";
import "./index.less";

@inject("appStore")
@observer
class Home extends React.Component {
  @observable num = 1;

  constructor(props) {
    super(props);
    makeObservable(this);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="home-wrap">
        <button
          onClick={() => {
            runInAction(() => {
              this.num++;
              appStore.userInfo.name = 'zzyydd';
            });
            console.log(this.num);
          }}
        >
          add
        </button>
        <div>{this.num}</div>
        <div>{appStore.userInfo.name}</div>
      </div>
    );
  }
}

export default Home;
