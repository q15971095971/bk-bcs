/*
 * Tencent is pleased to support the open source community by making Blueking Container Service available.
 * Copyright (C) 2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// Code generated by client-gen. DO NOT EDIT.

package v1alpha1

import (
	"context"
	"time"

	v1alpha1 "github.com/Tencent/bk-bcs/bcs-runtime/bcs-k8s/bcs-component/bcs-repack-descheduler/pkg/apis/tkex/v1alpha1"
	scheme "github.com/Tencent/bk-bcs/bcs-runtime/bcs-k8s/bcs-component/bcs-repack-descheduler/pkg/client/clientset/versioned/scheme"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	rest "k8s.io/client-go/rest"
)

// DeschedulePoliciesGetter has a method to return a DeschedulePolicyInterface.
// A group's client should implement this interface.
type DeschedulePoliciesGetter interface {
	DeschedulePolicies(namespace string) DeschedulePolicyInterface
}

// DeschedulePolicyInterface has methods to work with DeschedulePolicy resources.
type DeschedulePolicyInterface interface {
	Create(ctx context.Context, deschedulePolicy *v1alpha1.DeschedulePolicy, opts v1.CreateOptions) (*v1alpha1.DeschedulePolicy, error)
	Update(ctx context.Context, deschedulePolicy *v1alpha1.DeschedulePolicy, opts v1.UpdateOptions) (*v1alpha1.DeschedulePolicy, error)
	Delete(ctx context.Context, name string, opts v1.DeleteOptions) error
	DeleteCollection(ctx context.Context, opts v1.DeleteOptions, listOpts v1.ListOptions) error
	Get(ctx context.Context, name string, opts v1.GetOptions) (*v1alpha1.DeschedulePolicy, error)
	List(ctx context.Context, opts v1.ListOptions) (*v1alpha1.DeschedulePolicyList, error)
	Watch(ctx context.Context, opts v1.ListOptions) (watch.Interface, error)
	Patch(ctx context.Context, name string, pt types.PatchType, data []byte, opts v1.PatchOptions, subresources ...string) (result *v1alpha1.DeschedulePolicy, err error)
	DeschedulePolicyExpansion
}

// deschedulePolicies implements DeschedulePolicyInterface
type deschedulePolicies struct {
	client rest.Interface
	ns     string
}

// newDeschedulePolicies returns a DeschedulePolicies
func newDeschedulePolicies(c *TkexV1alpha1Client, namespace string) *deschedulePolicies {
	return &deschedulePolicies{
		client: c.RESTClient(),
		ns:     namespace,
	}
}

// Get takes name of the deschedulePolicy, and returns the corresponding deschedulePolicy object, and an error if there is any.
func (c *deschedulePolicies) Get(ctx context.Context, name string, options v1.GetOptions) (result *v1alpha1.DeschedulePolicy, err error) {
	result = &v1alpha1.DeschedulePolicy{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		Name(name).
		VersionedParams(&options, scheme.ParameterCodec).
		Do(ctx).
		Into(result)
	return
}

// List takes label and field selectors, and returns the list of DeschedulePolicies that match those selectors.
func (c *deschedulePolicies) List(ctx context.Context, opts v1.ListOptions) (result *v1alpha1.DeschedulePolicyList, err error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	result = &v1alpha1.DeschedulePolicyList{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Do(ctx).
		Into(result)
	return
}

// Watch returns a watch.Interface that watches the requested deschedulePolicies.
func (c *deschedulePolicies) Watch(ctx context.Context, opts v1.ListOptions) (watch.Interface, error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	opts.Watch = true
	return c.client.Get().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Watch(ctx)
}

// Create takes the representation of a deschedulePolicy and creates it.  Returns the server's representation of the deschedulePolicy, and an error, if there is any.
func (c *deschedulePolicies) Create(ctx context.Context, deschedulePolicy *v1alpha1.DeschedulePolicy, opts v1.CreateOptions) (result *v1alpha1.DeschedulePolicy, err error) {
	result = &v1alpha1.DeschedulePolicy{}
	err = c.client.Post().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		VersionedParams(&opts, scheme.ParameterCodec).
		Body(deschedulePolicy).
		Do(ctx).
		Into(result)
	return
}

// Update takes the representation of a deschedulePolicy and updates it. Returns the server's representation of the deschedulePolicy, and an error, if there is any.
func (c *deschedulePolicies) Update(ctx context.Context, deschedulePolicy *v1alpha1.DeschedulePolicy, opts v1.UpdateOptions) (result *v1alpha1.DeschedulePolicy, err error) {
	result = &v1alpha1.DeschedulePolicy{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		Name(deschedulePolicy.Name).
		VersionedParams(&opts, scheme.ParameterCodec).
		Body(deschedulePolicy).
		Do(ctx).
		Into(result)
	return
}

// Delete takes name of the deschedulePolicy and deletes it. Returns an error if one occurs.
func (c *deschedulePolicies) Delete(ctx context.Context, name string, opts v1.DeleteOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		Name(name).
		Body(&opts).
		Do(ctx).
		Error()
}

// DeleteCollection deletes a collection of objects.
func (c *deschedulePolicies) DeleteCollection(ctx context.Context, opts v1.DeleteOptions, listOpts v1.ListOptions) error {
	var timeout time.Duration
	if listOpts.TimeoutSeconds != nil {
		timeout = time.Duration(*listOpts.TimeoutSeconds) * time.Second
	}
	return c.client.Delete().
		Namespace(c.ns).
		Resource("deschedulepolicies").
		VersionedParams(&listOpts, scheme.ParameterCodec).
		Timeout(timeout).
		Body(&opts).
		Do(ctx).
		Error()
}

// Patch applies the patch and returns the patched deschedulePolicy.
func (c *deschedulePolicies) Patch(ctx context.Context, name string, pt types.PatchType, data []byte, opts v1.PatchOptions, subresources ...string) (result *v1alpha1.DeschedulePolicy, err error) {
	result = &v1alpha1.DeschedulePolicy{}
	err = c.client.Patch(pt).
		Namespace(c.ns).
		Resource("deschedulepolicies").
		Name(name).
		SubResource(subresources...).
		VersionedParams(&opts, scheme.ParameterCodec).
		Body(data).
		Do(ctx).
		Into(result)
	return
}
