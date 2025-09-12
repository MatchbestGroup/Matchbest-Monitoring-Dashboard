# AWS Monitoring Setup Instructions

This project includes a monitoring stack with Prometheus, Grafana, Loki, Tempo, and exporters. This document explains how to set up AWS monitoring using the CloudWatch Exporter.

## Prerequisites

- AWS account with appropriate IAM permissions.
- AWS Access Key ID and Secret Access Key.
- Docker and Docker Compose installed.

## AWS IAM Permissions

Create an IAM user or role with the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "cloudwatch:GetMetricData",
        "cloudwatch:ListMetrics",
        "ec2:DescribeInstances",
        "rds:DescribeDBInstances",
        "elasticloadbalancing:DescribeLoadBalancers",
        "lambda:ListFunctions",
        "s3:ListBuckets",
        "ec2:DescribeVolumes"
      ],
      "Resource": "*"
    }
  ]
}
```

## Configuration

1. Copy `.env.example` to `.env` and fill in your AWS credentials and region.

2. The AWS CloudWatch Exporter configuration is in `monitoring-config/aws_exporter.yml`. You can customize the metrics and namespaces as needed.

3. The `docker-compose.yml` includes the `aws_cloudwatch_exporter` service. It reads AWS credentials from environment variables.

4. Prometheus is configured to scrape metrics from the AWS CloudWatch Exporter on port 9106.

5. Alerting rules for AWS services are added in `monitoring-config/prometheus_rules.yml`.

6. A Grafana dashboard for AWS monitoring is available in `monitoring-config/grafana_aws_dashboard.json`. Import it into Grafana to visualize AWS metrics.

## Running

Start the monitoring stack with:

```bash
docker-compose up -d
```

Ensure your `.env` file is loaded in your environment or use a tool like `docker-compose --env-file .env up -d`.

## Customization

- Modify `monitoring-config/aws_exporter.yml` to add or remove AWS metrics.
- Update alerting rules in `monitoring-config/prometheus_rules.yml`.
- Customize Grafana dashboards as needed.

## Troubleshooting

- Check logs of `aws_cloudwatch_exporter` container for errors.
- Verify AWS credentials and permissions.
- Ensure network connectivity to AWS endpoints.

## References

- [CloudWatch Exporter GitHub](https://github.com/prometheus/cloudwatch_exporter)
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
- [Grafana Documentation](https://grafana.com/docs/)
