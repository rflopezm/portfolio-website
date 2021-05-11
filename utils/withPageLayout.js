import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';

export function withPageLayout(WrappedComponent, mode) {
  return class extends Component {
    render() {
      const { menus, profile } = this.props;
      return (
        <div className="w-full h-full">
          <Navigation profile={profile} mode={mode} menus={menus}></Navigation>
          <WrappedComponent {...this.props}></WrappedComponent>
        </div>
      );
    }
  };
}
