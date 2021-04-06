import {fluentProvide} from 'inversify-binding-decorators'

let provideThrowalbe = (identifier,name)=>{
  return fluentProvide(identifier).whenTargetNamed(name).done();
}

export {provideThrowalbe}