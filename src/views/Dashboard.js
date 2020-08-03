import React, { useEffect, useContext } from 'react';
import '../css/now-ui-dashboard.css';
import Chart from 'chart.js'
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';


const Dashboard = (props) => {
    const {store, actions} = useContext(Context)
    useEffect(() => {
        initDashboardPageCharts()
        actions.validaLogin(props)
      

    }, [])

    function hexToRGB(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    const initDashboardPageCharts = () => {

        let chartColor = "#FFFFFF";

        // General configuration for the charts with Line gradientStroke
        let gradientChartOptionsConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        let gradientChartOptionsConfigurationWithNumbersAndGrid = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode: "nearest",
                intersect: 0,
                position: "nearest",
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            responsive: true,
            scales: {
                yAxes: [{
                    gridLines: 0,
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display: 0,
                    gridLines: 0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 15
                }
            }
        };

        var ctx = document.getElementById('bigDashboardChart').getContext("2d");

        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                datasets: [{
                    label: "Ventas Mensuales",
                    borderColor: chartColor,
                    pointBorderColor: chartColor,
                    pointBackgroundColor: "#1e3d60",
                    pointHoverBackgroundColor: "#1e3d60",
                    pointHoverBorderColor: chartColor,
                    pointBorderWidth: 1,
                    pointHoverRadius: 7,
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 0,
                        bottom: 0
                    }
                },
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: '#fff',
                    titleFontColor: '#333',
                    bodyFontColor: '#666',
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                legend: {
                    position: "bottom",
                    fillStyle: "#FFF",
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 10
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            display: true,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "transparent"
                        }

                    }],
                    xAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent",
                            display: false,

                        },
                        ticks: {
                            padding: 10,
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold"
                        }
                    }]
                }
            }
        });

        var cardStatsMiniLineColor = "#fff",
            cardStatsMiniDotColor = "#fff";

        ctx = document.getElementById('lineChartExample').getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

        myChart = new Chart(ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                datasets: [{
                    label: "Productos Enviados",
                    borderColor: "#f96332",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#f96332",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
                }]
            },
            options: gradientChartOptionsConfigurationWithNumbersAndGrid
        });


        ctx = document.getElementById('lineChartExampleWithNumbersAndGrid').getContext("2d");

        gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, chartColor);

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB('#18ce0f', 0.4));

        myChart = new Chart(ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                datasets: [{
                    label: "Nivel de Stock",
                    borderColor: "#18ce0f",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#18ce0f",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: [40, 500, 650, 700, 950, 1200, 750, 1200, 1250, 1300, 1900, 1800]
                }]
            },
            options: gradientChartOptionsConfigurationWithNumbersAndGrid
        });

        var e = document.getElementById("barChartSimpleGradientsNumbers").getContext("2d");

        gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB('#2CA8FF', 0.6));

        var a = {
            type: "bar",
            data: {
                labels: ["Lun","Mar","Mie", "Jue", "Vie", "Sab", "Dom"],
                datasets: [{
                    label: "Ventas últimos 7 días",
                    backgroundColor: gradientFill,
                    borderColor: "#2CA8FF",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#2CA8FF",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    borderWidth: 1,
                    data: [80, 99, 86, 96, 123, 85, 100]
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    bodySpacing: 4,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                responsive: 1,
                scales: {
                    yAxes: [{
                        gridLines: 0,
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawBorder: false
                        }
                    }],
                    xAxes: [{
                        display: 0,
                        gridLines: 0,
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            zeroLineColor: "transparent",
                            drawTicks: false,
                            display: false,
                            drawBorder: false
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 15,
                        bottom: 15
                    }
                }
            }
        };

        var viewsChart = new Chart(e, a);
    }



    return (
        <>
            <div className="panel-header panel-header-lg">
                <canvas id="bigDashboardChart"></canvas>
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card card-chart">
                            <div className="card-header">
                                <h5 className="card-category">Año 2020</h5>
                                <h4 className="card-title">Productos enviados</h4>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                        <i className="now-ui-icons loader_gear"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Acción</a>
                                        <a className="dropdown-item" href="#">Otra acción</a>
                                        <a className="dropdown-item" href="#">Algo más aquí</a>
                                        <a className="dropdown-item text-danger" href="#">Remover Data</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="lineChartExample"></canvas>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="now-ui-icons arrows-1_refresh-69"></i>Recién actualizado
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card card-chart">
                            <div className="card-header">
                                <h5 className="card-category">Año 2020</h5>
                                <h4 className="card-title">Nivel de stock</h4>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                        <i className="now-ui-icons loader_gear"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Acción</a>
                                        <a className="dropdown-item" href="#">Otra acción</a>
                                        <a className="dropdown-item" href="#">Algo más aquí</a>
                                        <a className="dropdown-item text-danger" href="#">Remover Data</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="now-ui-icons arrows-1_refresh-69"></i>Recién actualizado
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card card-chart">
                            <div className="card-header">
                                <h5 className="card-category">Ventas Semanales</h5>
                                <h4 className="card-title">Últimos 7 días</h4>
                                <div className="dropdown">
                                    <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                        <i className="now-ui-icons loader_gear"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Acción</a>
                                        <a className="dropdown-item" href="#">Otra acción</a>
                                        <a className="dropdown-item" href="#">Algo más aquí</a>
                                        <a className="dropdown-item text-danger" href="#">Remover Data</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="barChartSimpleGradientsNumbers"></canvas>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="now-ui-icons ui-2_time-alarm"></i>Últimos 7 días
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card  card-tasks">
                            <div className="card-header ">
                                <h5 className="card-category">Planificación</h5>
                                <h4 className="card-title">Tareas</h4>
                            </div>
                            <div className="card-body ">
                                <div className="table-full-width table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" defaultChecked={true} />
                                                            <span className="form-check-sign"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="text-left">Contactar a proveedor para consultar por último envio</td>
                                                <td className="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                        <i className="now-ui-icons ui-2_settings-90"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" />
                                                            <span className="form-check-sign"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="text-left">Revisar stock de SKU 3422 en bodega central</td>
                                                <td className="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                        <i className="now-ui-icons ui-2_settings-90"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" defaultChecked={true} />
                                                            <span className="form-check-sign"></span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="text-left">Revisar caducidad de bodega temporal</td>
                                                <td className="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Edit Task">
                                                        <i className="now-ui-icons ui-2_settings-90"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Remove">
                                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <hr />
                                <div className="stats">
                                    <i className="now-ui-icons loader_refresh spin"></i>Actualizado hace 3 minutos
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-category">Estadísticas</h5>
                                <h4 className="card-title">Ventas por vendedor</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className=" text-primary">
                                            <tr>
                                                <th>Nombre</th>
                                                <th>Sucursal</th>
                                                <th>Ciudad</th>
                                                <th className="text-right">Venta Acumulada</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Pedro del Olmo</td>
                                                <td>Macul</td>
                                                <td>Santiago</td>
                                                <td className="text-right">$360.738</td>
                                            </tr>
                                            <tr>
                                                <td>Isabel Peñalver</td>
                                                <td>Concepción</td>
                                                <td>Concepción</td>
                                                <td className="text-right">$230.789</td>
                                            </tr>
                                            <tr>
                                                <td>Fabio Candela</td>
                                                <td>Temuco</td>
                                                <td>Temuco</td>
                                                <td className="text-right">$562.142</td>
                                            </tr>
                                            <tr>
                                                <td>Melanie Chavez</td>
                                                <td>Valparaíso</td>
                                                <td>Valparaíso</td>
                                                <td className="text-right">$633.542</td>
                                            </tr>
                                            <tr>
                                                <td>Luis J. Rodriguez Z.</td>
                                                <td>Providencia</td>
                                                <td>Santiago</td>
                                                <td className="text-right">$781.615</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Dashboard);
