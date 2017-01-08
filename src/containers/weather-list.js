import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{
          render(){
                    return (
                              <table className="table table-hover">
                                        <thead>
                                                  <tr>
                                                            <th>City</th>
                                                            <th>Temparature</th>
                                                            <th>Pressure</th>
                                                            <th>Himidity</th>
                                                  </tr>
                                        </thead>
                                        <tbody></tbody>
                              </table>
                    )
          }
}
// identical to
// function mapStateToProps(state){ const weather = state.weather ...}
function mapStateToProps({weather}){
          return {weather};
}

export default connect(mapStateToProps)(WeatherList);
