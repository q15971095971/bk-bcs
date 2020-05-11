/*
Tencent is pleased to support the open source community by making Blueking Container Service available.
Copyright (C) 2019 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except
in compliance with the License. You may obtain a copy of the License at
http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the License for the specific language governing permissions and
limitations under the License.
*/

package service

import (
	"errors"
	"time"

	"github.com/spf13/viper"
)

const (
	// ENVPREFIX is prefix for env variables.
	ENVPREFIX = "BSCP_BS"
)

// config for local module.
type config struct {
	viper *viper.Viper
}

// init initialize and check the module configs.
func (c *config) init(localConfigFile string) (*viper.Viper, error) {
	c.viper = viper.New()
	c.viper.SetConfigFile(localConfigFile)

	if err := c.viper.ReadInConfig(); err != nil {
		return nil, err
	}
	c.viper.WatchConfig()

	c.viper.SetEnvPrefix(ENVPREFIX)
	c.viper.AutomaticEnv()

	if err := c.check(); err != nil {
		return nil, err
	}
	return c.viper, nil
}

func (c *config) envName(bindKey string) string {
	return ENVPREFIX + "_" + bindKey
}

// check bind the env vars and checks base config content.
func (c *config) check() error {
	c.viper.BindEnv("server.servicename", c.envName("SERVICE_NAME"))
	if !c.viper.IsSet("server.servicename") {
		return errors.New("config check, missing 'server.servicename'")
	}

	c.viper.BindEnv("server.endpoint.ip", c.envName("ENDPOINT_IP"))
	if !c.viper.IsSet("server.endpoint.ip") {
		return errors.New("config check, missing 'server.endpoint.ip'")
	}

	c.viper.BindEnv("server.endpoint.port", c.envName("ENDPOINT_PORT"))
	if !c.viper.IsSet("server.endpoint.port") {
		return errors.New("config check, missing 'server.endpoint.port'")
	}

	c.viper.BindEnv("server.discoveryttl", c.envName("DISCOVERY_TTL"))
	c.viper.SetDefault("server.discoveryttl", 60)

	c.viper.BindEnv("metrics.endpoint", c.envName("METRICS_ENDPOINT"))
	c.viper.SetDefault("metrics.endpoint", ":9100")

	c.viper.BindEnv("audit.infoChanSize", c.envName("AUDIT_CHAN_SIZE"))
	c.viper.SetDefault("audit.infoChanSize", 1000)

	c.viper.BindEnv("audit.infoChanTimeout", c.envName("AUDIT_CHAN_TIMEOUT"))
	c.viper.SetDefault("audit.infoChanTimeout", 500*time.Millisecond)

	c.viper.BindEnv("etcdCluster.endpoints", c.envName("ETCD_ENDPOINTS"))
	if !c.viper.IsSet("etcdCluster.endpoints") {
		return errors.New("config check, missing 'etcdCluster.endpoints'")
	}
	c.viper.BindEnv("etcdCluster.dialtimeout", c.envName("ETCD_DIAL_TIMEOUT"))
	c.viper.SetDefault("etcdCluster.dialtimeout", 3*time.Second)

	c.viper.BindEnv("etcdCluster.tls.certPassword", c.envName("ETCD_TLS_CERT_PASSWORD"))
	c.viper.SetDefault("etcdCluster.tls.certPassword", "")

	c.viper.BindEnv("etcdCluster.tls.cafile", c.envName("ETCD_TLS_CAFILE"))
	c.viper.SetDefault("etcdCluster.tls.cafile", "")

	c.viper.BindEnv("etcdCluster.tls.certfile", c.envName("ETCD_TLS_CERTFILE"))
	c.viper.SetDefault("etcdCluster.tls.certfile", "")

	c.viper.BindEnv("etcdCluster.tls.keyfile", c.envName("ETCD_TLS_KEYFILE"))
	c.viper.SetDefault("etcdCluster.tls.keyfile", "")

	c.viper.BindEnv("datamanager.servicename", c.envName("DM_SERVICE_NAME"))
	if !c.viper.IsSet("datamanager.servicename") {
		return errors.New("config check, missing 'datamanager.servicename'")
	}
	c.viper.BindEnv("datamanager.calltimeout", c.envName("DM_CALL_TIMEOUT"))
	c.viper.SetDefault("datamanager.calltimeout", 3*time.Second)

	c.viper.BindEnv("templateserver.servicename", c.envName("TPL_SERVICE_NAME"))
	if !c.viper.IsSet("templateserver.servicename") {
		return errors.New("config check, missing 'templateserver.servicename'")
	}
	c.viper.BindEnv("templateserver.calltimeout", c.envName("TPL_CALL_TIMEOUT"))
	c.viper.SetDefault("templateserver.calltimeout", 3*time.Second)

	c.viper.BindEnv("bcscontroller.servicename", c.envName("BCS_SERVICE_NAME"))
	if !c.viper.IsSet("bcscontroller.servicename") {
		return errors.New("config check, missing 'bcscontroller.servicename'")
	}
	c.viper.BindEnv("bcscontroller.calltimeout", c.envName("BCS_CALL_TIMEOUT"))
	c.viper.SetDefault("bcscontroller.calltimeout", 3*time.Second)

	c.viper.BindEnv("gsecontroller.servicename", c.envName("GSE_SERVICE_NAME"))
	if !c.viper.IsSet("gsecontroller.servicename") {
		return errors.New("config check, missing 'gsecontroller.servicename'")
	}
	c.viper.BindEnv("gsecontroller.calltimeout", c.envName("GSE_CALL_TIMEOUT"))
	c.viper.SetDefault("gsecontroller.calltimeout", 3*time.Second)

	c.viper.BindEnv("logger.directory", c.envName("LOG_DIR"))
	c.viper.SetDefault("logger.directory", "./log")

	c.viper.BindEnv("logger.maxsize", c.envName("LOG_MAXSIZE"))
	c.viper.SetDefault("logger.maxsize", 200)

	c.viper.BindEnv("logger.maxnum", c.envName("LOG_MAXNUM"))
	c.viper.SetDefault("logger.maxnum", 5)

	c.viper.BindEnv("logger.stderr", c.envName("LOG_STDERR"))
	c.viper.SetDefault("logger.stderr", false)

	c.viper.BindEnv("logger.alsoStderr", c.envName("LOG_ALSOSTDERR"))
	c.viper.SetDefault("logger.alsoStderr", false)

	c.viper.BindEnv("logger.level", c.envName("LOG_LEVEL"))
	c.viper.SetDefault("logger.level", 3)

	c.viper.BindEnv("logger.stderrThreshold", c.envName("LOG_STDERR_THRESHOLD"))
	c.viper.SetDefault("logger.stderrThreshold", 2)

	return nil
}
